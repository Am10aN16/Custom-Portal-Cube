import React from 'react';
import { Customer } from '../types';

interface CustomerListProps {
    customers: Customer[];
    selectedCustomerId: number | null;
    onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
    return (
        <div className="customer-list">
            {customers.map(customer => (
                <div
                    key={customer.id}
                    className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
                    onClick={() => onSelectCustomer(customer)}
                >
                    <h3>{customer.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit quia possimus.</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerList;
