// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import chat from "@src/views/apps/chats/store";
import invoice from "@src/views/apps/invoice/store";
import dataTables from "@src/views/tables/data-tables/store";

const rootReducer = { navbar, layout, chat, invoice, dataTables };

export default rootReducer;
