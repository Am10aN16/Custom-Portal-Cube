// src/App.tsx
import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types';
import './App.css';

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const customers: Customer[] = [
    { id: 1, name: 'Customer 01', title: 'CEO', address: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 2, name: 'Customer 02', title: 'CTO', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 3, name: 'Customer 03', title: 'CFO', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 5, name: 'Customer 05', title: 'COO', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 6, name: 'Customer 06', title: 'Employee', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 7, name: 'Customer 07', title: 'Employee', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 8, name: 'Customer 08', title: 'Employee', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 9, name: 'Customer 09', title: 'Employee', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 10, name: 'Customer 10', title: 'Employee', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
    { id: 11, name: 'Customer 11', title: 'Employee', address:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nisi animi eligendi, harum numquam ad aliquid ipsam obcaecati dolores molestias in sapiente voluptatibus veritatis, fugit at tempore provident laudantium eius.' },
  ];

  return (
    <div className="app-container">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomer?.id || null}
        onSelectCustomer={setSelectedCustomer}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
