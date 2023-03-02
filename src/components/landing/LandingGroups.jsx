import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, Button, Divider } from "@mui/material";

import MainListItem from "./MainListItem";
import { GroupContext } from "./../../context/groupContext";

function LandingGroups() {
    const { filteredGroups } = useContext(GroupContext);

    return (
        <div className="mt-3 w-100">
            {filteredGroups.length === 0 ? (
                <h6>برای جست و جوی شما نتایجی وجود ندارد.</h6>
            ) : (
                <List sx={{ minHeight: 100 }} className="w-100 main-list">
                    {filteredGroups.slice(0, 3).map((group) => (
                        <div key={`group${group.slug}`}>
                            <ListItem alignItems="flex-start">
                                <MainListItem
                                    name={group.name}
                                    description={group.description}
                                    id={group.slug}
                                    image={group.image}
                                />
                            </ListItem>
                            <Divider variant="middle" component={"li"} />
                        </div>
                    ))}
                </List>
            )}
            {filteredGroups.length > 3 ? (
                <Link to={"/search"} style={{ textDecoration: "none" }}>
                    <Button size="sm" variant="contained" className="mb-4 w-100 mt-3">
                        مشاهده بیشتر
                    </Button>
                </Link>
            ) : null}
        </div>
    );
}

export default LandingGroups;