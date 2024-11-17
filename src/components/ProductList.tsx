import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

const api = import.meta.env.VITE_PRODUCTS_API;

interface ProductModel {
    id: number;
    title: string;
    price: number;
    discount: number;
    quantity: number;
    imageUrl?: string;
}

const columns: TableProps<ProductModel>['columns'] = [
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'image',
        render: (_, i) => <img style={{ height: "42px" }} src={i.imageUrl} alt={i.title}></img>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        render: (text) => <span>{text}$</span>,
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
        render: (text) => <span>{text}%</span>,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text, i) =>
            i.quantity > 0 ?
                <Tag color="green">
                    {text}
                </Tag>
                :
                <Tag color="volcano">
                    Out of Stock
                </Tag>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Show</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const ProductList: React.FC = () => {

    const [products, setProducts] = useState<ProductModel[]>();

    useEffect(() => {
        fetch(api + "all").then(res => res.json()).then(data => {
            setProducts(data);
        });
    }, []);

    return (<Table<ProductModel> columns={columns} dataSource={products} rowKey={i => i.id} />)
};

export default ProductList;
