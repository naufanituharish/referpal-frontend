import React from 'react';
import ContentLoader from "react-content-loader";

const CategoryCardLoader = () => (
    <ContentLoader
        speed={2}
        width={510}
        height={160}
        viewBox="0 0 510 160"
        backgroundColor="#E4E4E4"
        foregroundColor="#bdbdbd"
        style={{
            marginLeft: 8
        }}
    >
        <rect x="2" y="1" rx="5" ry="5" width="200" height="106" />
        <rect x="3" y="115" rx="5" ry="5" width="200" height="26" />
        <rect x="221" y="1" rx="5" ry="5" width="200" height="106" />
        <rect x="222" y="115" rx="5" ry="5" width="200" height="26" />
        <rect x="445" y="1" rx="5" ry="5" width="200" height="106" />
        <rect x="446" y="115" rx="5" ry="5" width="200" height="26" />
    </ContentLoader>)

export default CategoryCardLoader;