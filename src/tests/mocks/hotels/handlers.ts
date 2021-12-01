import { rest } from "msw";

import { hotelRoomRates, hotels } from "./data";

const hotelHandlers = [
  rest.get("https://obmng.dbm.guestline.net/api/hotels", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(hotels));
  }),
  rest.get(
    "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG1",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(hotelRoomRates));
    }
  ),
];

export default hotelHandlers;
