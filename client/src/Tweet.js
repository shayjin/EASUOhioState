import React, {useEffect, useState} from 'react';
export const Tweet = () => {
    useEffect( () => {
      fetchItems();
    }, []);
  
    const [items, setItems] = useState([]);
  
    const fetchItems = async() => {
      const data = await fetch('/tweet');
      const items = await data.json();
      setItems(items);
    }
    return (
        <div>
            {items.map (item => (
                <>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                </>
            ))
            }
        </div>
    );
}