import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ProductModel } from '../models/products';

const api = import.meta.env.VITE_PRODUCTS_API;

const ProductList: React.FC = () => {

    const [products, setProducts] = useState<ProductModel[]>();

    useEffect(() => {
        fetch(api + "all").then(res => res.json()).then(data => {
            setProducts(data);
        });
    }, []);

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
            render: (_, i) => (
                <Space size="middle">
                    <Link to={`/details/${i.id}`}>
                        <Button type="text" icon={<InfoCircleOutlined />}></Button>
                    </Link>
                    <Link to={`/edit/${i.id}`}>
                        <Button type="text" icon={<EditOutlined />}></Button>
                    </Link>
                    <Popconfirm
                        title="Delete the product"
                        description={`Are you sure to delete ${i.title}?`}
                        onConfirm={() => deleteProduct(i.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="text" danger icon={<DeleteOutlined />}></Button>
                    </Popconfirm>

                </Space>
            ),
        },
    ];
    const deleteProduct = (id: number) => {
        setProducts(products?.filter(x => x.id !== id));
        console.log("Deleting...");

        fetch(api + id, { method: "DELETE" }).then(res => {
            if (res.status === 200)
                message.success("Product deleted successfully!");
        });
    }

    return (<Table<ProductModel> columns={columns} dataSource={products} rowKey={i => i.id} />)
};

export default ProductList;
