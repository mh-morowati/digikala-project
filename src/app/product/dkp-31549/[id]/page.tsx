"use client"
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Sidebar from '@/components/side-bar';
import Loading from '@/app/loading';
import NotFound from '@/app/not-found';

interface ProductProps {
  params: {
    id?: string;
  };
}

interface ProductData {
  id: string;
  productName: string;
  imageUrl: string;
  description: string;
  recommendationRate: string;
  count:string;
  disCount:string;
  numDisCount: string;
}

const Product: React.FC<ProductProps> = ({ params }) => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/products/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
          setError('Failed to load product data.');
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) {
    return Loading();
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product?.id) {
    return NotFound();
  }

  return (
    <>
      <Header />
      <div>
        <div>
          <Image
            className='inline-block'
            src={product.imageUrl}
            width={350}
            height={350}
            alt={product.productName}
          />
          <div className="bg-white shadow overflow-hidden sm:rounded-lg inline-block">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {product.productName}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {product.recommendationRate}
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 mb-4">
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
         <div className='inline-block max-lg:block max-lg:relative max-lg:bottom-56 max-sm:bottom-80'>
         <Sidebar discount={product.disCount} count={product.count} numDiscount={product.numDisCount} productName = {product.productName} />
         </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
