import React, { useEffect } from "react";
import { get_ids } from "lib/api/get_ids";
import { get_items } from "lib/api/get_items";

function App() {
  useEffect(() => {
    get_ids({}).then((r) => console.log(r));
    get_items({ params: { ids: ["dfdf"] } }).then((r) => console.log(r));
  }, []);

  return <></>;
}

export default React.memo(App);
