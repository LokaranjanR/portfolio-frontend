import React, { useEffect, useState } from "react";
import portfolioService from "../services/portfolioService";

export default function PortfolioItemList({ portfolioItems }) {
    const [items, setItems] = useState([]);


    useEffect(() => {
        //Fetch portfolio items when the component mounts
        async function fetchPortfolioItems() {
            try {
                const items = await portfolioService.getAllPortfolioItems();
                setItems(items);

            } catch (error) {
                console.error('Error fetching portfolio items', error);
            }
        }

        fetchPortfolioItems();
    }, []);

    return (
        <div className="portfolio-item-list">
            <table className="min-w-full table-auto">
                <thead className="bg-neutral-800 text-yellow-100">
                    <tr>
                        <th className="px-4 py-2">Project Name</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Skills</th>
                        <th className="px-4 py-2">Repository Link</th>

                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-400">
                            {/* Display item details here */}
                            <td className="border px-4 py-2">{item.projectname}</td>
                            <td className="border px-4 py-2">{item.description}</td>
                            <td className="border px-4 py-2">{item.skills}</td>
                            <td className="border px-4 py-2">{item.repolink}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}