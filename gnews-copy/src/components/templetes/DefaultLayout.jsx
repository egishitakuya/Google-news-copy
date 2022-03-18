import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { News } from "../pages/News";
import { Top } from "../pages/Top";

export const DefaultLayout = () => {
  return (
    <BrowserRouter>
      <Link to="/top">トップニュース</Link>
      <br />
      <Link to="/news">おすすめ</Link>

      <Switch>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
