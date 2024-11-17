import { LeftOutlined } from '@ant-design/icons'
import { Button, Tag, Flex, Space, Skeleton, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { ProductModel } from '../models/products'
import { useNavigate, useParams } from 'react-router-dom';

const api = import.meta.env.VITE_PRODUCTS_API;

type QuaryParams = {
    id: string;
}

export default function ProductDetails() {

    const [item, setItem] = useState<ProductModel | null>(null);
    const { id } = useParams<QuaryParams>();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(api + id).then(res => res.json()).then(data => setItem(data));
    });

    return (
        <>
            <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>

            {item
                ?
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.categoryName}</p>
                    <hr />
                    <Image
                        width={200}
                        src={item.imageUrl}
                    />
                    <p>Price: {item.price}$</p>
                    <p>Discount: {item.discount}%</p>
                    <p>Availability: {item.quantity > 0 ?
                        <Tag color="green">{item.quantity}</Tag>
                        :
                        <Tag color="volcano">Out of Stock</Tag>}</p>

                    <p>{item.description}</p>
                </div>
                :
                <Flex gap="middle" vertical>
                    <Space>
                        <Skeleton.Input active />
                        <Skeleton.Input active />
                    </Space>
                    <Skeleton
                        paragraph={{
                            rows: 0,
                        }}
                    />
                    <Skeleton.Image />
                    <Skeleton active />
                </Flex>
            }
        </>
    )
}
