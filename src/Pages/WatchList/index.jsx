import React, { useEffect, useState } from "react";
import axios from "axios";
import { WatchListItem } from "../../Components/WatchListItem";
import { CustomWatchListForm } from "../../Components/CustomWatchListItemForm";
import { CustomWatchListItem } from "../../Components/CustomWatchListItem";

export const WatchListPage = () => {
  const [watchListItems, setWatchListItems] = useState([]);
  const [customWatchListItems, setCustomWatchListItems] = useState([]);
  const MOVIES_BASE_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/movies";
  const TV_SHOW_BASE_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/tvshows";
  const WATCHLIST_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/watchlist";

  const CUSTOM_WATCHLIST_ITEM_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/customWatchListItem";

  const fetchWatchListItems = async () => {
    try {
      const { data } = await axios.get(WATCHLIST_URL);
      setWatchListItems(data);
    } catch (error) {
      console.error("Error fetching watchlist items:", error);
    }
  };

  const fetchCustomWatchListItems = async () => {
    try {
      const { data } = await axios.get(CUSTOM_WATCHLIST_ITEM_URL);
      setCustomWatchListItems(data);
    } catch (error) {
      console.error("Error fetching watchlist items:", error);
    }
  };

  const handleRemoveFromWatchList = async (event, watchListItem) => {
    event.preventDefault();
    try {
      await axios.delete(WATCHLIST_URL + `/${watchListItem.id}`);
      if (watchListItem.isTVShow) {
        await axios.post(TV_SHOW_BASE_URL, watchListItem);
      } else {
        await axios.post(MOVIES_BASE_URL, watchListItem);
      }
      fetchWatchListItems();
    } catch (error) {
      console.error("Error removing from watch list:", error);
    }
  };

  const handleCreateCustomWatchListItem = async (item) => {
    try {
      await axios.post(CUSTOM_WATCHLIST_ITEM_URL, item);
      fetchCustomWatchListItems();
    } catch (error) {
      console.error("Error creating custom watchlist items:", error);
    }
  };

  useEffect(() => {
    fetchWatchListItems();
    fetchCustomWatchListItems();
  }, []);

  console.log("customWatchListItems", customWatchListItems);

  return (
    <section className="text-center">
      <h2>Hello from the watchlist page</h2>
      <CustomWatchListForm onSubmit={handleCreateCustomWatchListItem} />
      <div className="flex flex-wrap justify-evenly px-4">
        {watchListItems?.map((watchListItem) => (
          <WatchListItem
            watchListItem={watchListItem}
            onRemoveFromWatchList={handleRemoveFromWatchList}
            key={watchListItem.title}
          />
        ))}
        {customWatchListItems.map((item) => (
          <CustomWatchListItem item={item} />
        ))}
      </div>
    </section>
  );
};
