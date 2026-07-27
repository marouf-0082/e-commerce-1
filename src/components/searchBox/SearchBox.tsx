import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetProducts } from "../services/product/hooks";
import type { IProduct } from "../services/product/types";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

function SearchBox() {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const { data } = useGetProducts();

  console.log(searchResult);
  useEffect(() => {
    setLoading(true);
    const Timeout = setTimeout(() => {
      if (query.trim()) {
        setSearchResult(() => {
          return (
            data?.filter((product) =>
              product.name
                .replaceAll(" ", "")
                .toLowerCase()
                .startsWith(query.replaceAll(" ", "").toLowerCase())
            ) ?? []
          );
        });
        setLoading(false);
      } else {
        setSearchResult([]);
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(Timeout);
  }, [query.trim(), data]);

  const clearSearchBox = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      {query && (
        <X
          size={16}
          color="#666666"
          className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
          onClick={clearSearchBox}
        />
      )}
      <Search
        color="#666666"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-full border bg-background py-2.5 pl-11 pr-4 text-foreground text-sm outline-none"
      />
      <div
        className={`${query ? "block" : "hidden"} absolute top-17 p-2 w-full overflow-y-auto flex flex-col gap-3 items-center justify-between border rounded-3xl backdrop-blur-2xl`}
      >
        {loading ? (
          <Loader size="md" />
        ) : searchResult.length === 0 ? (
          <div>Not founded</div>
        ) : (
          <ul>
            {searchResult.map((res) => (
              <li key={res.id}>
                <Link to={`/product/${res.id}`} onClick={clearSearchBox}>
                  {res.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
