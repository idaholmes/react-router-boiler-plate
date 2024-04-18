import React, { useEffect, useState } from "react";
import axios from "axios";
import { WatchListItem } from "../../Components/WatchListItem";
import { CustomWatchListForm } from "../../Components/CustomWatchListItemForm";
import { CustomWatchListItem } from "../../Components/CustomWatchListItem";

export const WatchListPage = () => {
  // setWatchListItems to empty array on load
  const [watchListItems, setWatchListItems] = useState([]);
  // set customWatchListItems to empty array on load
  const [customWatchListItems, setCustomWatchListItems] = useState([]);

  // establish API URL's
  const MOVIES_BASE_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/movies";
  const TV_SHOW_BASE_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/tvshows";
  const WATCHLIST_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/watchlist";
  const CUSTOM_WATCHLIST_ITEM_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/customWatchListItem";

  // GET REQUEST that fetches watchlist items
  const fetchWatchListItems = async () => {
    try {
      const { data } = await axios.get(WATCHLIST_URL);
      // set watchListItems with data we get back from api
      setWatchListItems(data);
    } catch (error) {
      console.error("Error fetching watchlist items:", error);
    }
  };

  // GET REQUEST that fetches custom watchlist items
  const fetchCustomWatchListItems = async () => {
    try {
      const { data } = await axios.get(CUSTOM_WATCHLIST_ITEM_URL);
      // set custom watchListItems with data we get back from api
      setCustomWatchListItems(data);
    } catch (error) {
      console.error("Error fetching watchlist items:", error);
    }
  };

  // DELETE and POST CRUD requests for removing an item from a watchlist
  const handleRemoveFromWatchList = async (event, watchListItem) => {
    event.preventDefault();
    try {
      // delete from watchlist
      await axios.delete(WATCHLIST_URL + `/${watchListItem.id}`);

      // if item is a tvShow, POST to tv show api
      if (watchListItem.isTVShow) {
        await axios.post(TV_SHOW_BASE_URL, watchListItem);
      } else {
        // otherwise POST to movies api
        await axios.post(MOVIES_BASE_URL, watchListItem);
      }
      // fetch watchlist items again so screen visually refreshed
      fetchWatchListItems();
    } catch (error) {
      console.error("Error removing from watch list:", error);
    }
  };

  // POST CRUD request for creating a custom watchlist item
  const handleCreateCustomWatchListItem = async (item) => {
    try {
      // POST item to api
      await axios.post(CUSTOM_WATCHLIST_ITEM_URL, item);
      // fetch customWatchListItems again so screen visually refreshes.
      fetchCustomWatchListItems();
    } catch (error) {
      console.error("Error creating custom watchlist items:", error);
    }
  };

  //PUT CRUD request to edit a custom watch list item
  const handleEditCustomWatchListItem = async (event, item) => {
    event.preventDefault();
    try {
      // pass in item to be edited with new data passed up from child component, find item in api by its id and edit it
      await axios.put(CUSTOM_WATCHLIST_ITEM_URL + `/${item.id}`, item);
      // fetch custom watch items again to visually update screen
      fetchCustomWatchListItems();
    } catch (error) {
      console.error("Error editing custom watchlist item:", error);
    }
  };

  // DELETE CRUD request
  const handleDeleteCustomWatchListItem = async (itemId) => {
    try {
      // find item by its id and delete it
      await axios.delete(CUSTOM_WATCHLIST_ITEM_URL + `/${itemId}`);
      // fetch custom watch items again to visually update screen
      fetchCustomWatchListItems();
    } catch (error) {
      console.error("Error removing from custom watch list:", error);
    }
  };

  useEffect(() => {
    // fetch watchlist and custom watchlist items on page load
    fetchWatchListItems();
    fetchCustomWatchListItems();
  }, []);

  return (
    <section className="text-center">
      <h1 className="text-3xl mb-8">Welcome to the watchlist page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {watchListItems?.map((watchListItem) => (
          <WatchListItem
            watchListItem={watchListItem}
            onRemoveFromWatchList={handleRemoveFromWatchList}
            key={watchListItem.title}
          />
        ))}
      </div>
      <div className="">
        <h2 className="text-2xl">Custom Watchlist Items</h2>
        <CustomWatchListForm onSubmit={handleCreateCustomWatchListItem} />
        <div>
          {customWatchListItems.map((item) => (
            <CustomWatchListItem
              item={item}
              key={item.title}
              onEditSubmit={handleEditCustomWatchListItem}
              onDelete={handleDeleteCustomWatchListItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
