import { setupServer } from "msw/node";

import hotelsHandlers from "./hotels/handlers";

const server = setupServer(...hotelsHandlers);

export default server;
