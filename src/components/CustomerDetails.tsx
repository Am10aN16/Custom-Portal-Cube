import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Customer } from '../types';

interface CustomerDetailsProps {
    customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
    const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`https://picsum.photos/v2/list?page=${Math.floor(Math.random()*10)}&limit=9`);
                setPhotos(response.data.map((photo: any) => photo.download_url));
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
        const interval = setInterval(fetchPhotos, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="customer-details">
            <h2>{customer.name} details</h2>
            <p className='para'>{customer.title}</p>
            <p className='para'>{customer.address}</p>
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Photo ${index}`} id='grid-img'/>
                ))}
            </div>
        </div>
    );
};

export default CustomerDetails;
