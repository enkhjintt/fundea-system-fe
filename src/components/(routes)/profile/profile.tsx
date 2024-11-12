"use client";

import React from "react";
import Button from "@/components/button";
import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";

type IProps = {};

const UserProfile: React.FC<IProps> = () => {
  return (
    <div style = {{backgroundColor: '#FFFFFF'}}>
    <div style={{ position: 'relative', width: '1280px', height: '50px', /*backgroundColor: 'black'*/}}>
      <h1
        style={{
         position: 'absolute',           // Lower z-index to place it behind the rectangle
          color: 'red', 
          marginLeft: '35px',
          marginTop: '10px',    
          fontFamily: 'MontSerrat',
          fontWeight: 'bold',
        }}
      >
        Профайл
      </h1>
      <div
        style={{
          width: '20px',
          height: '40px',
          borderRadius: '5px',
          backgroundColor: 'red',
          position: 'relative',
          zIndex: 2,             // Higher z-index to place it in front of the h1
        }}
      ></div>
    </div>
    {/* <div style={{ position: 'relative', width: '346px', height: '201px', backgroundColor: '#F7F7F7', marginTop: '20px' }}></div>
    <div style={{ position: 'relative', width: '346px', height: '399px', backgroundColor: '#F7F7F7', marginTop: '20px'}}></div> */}

<div style={{ display: 'grid', gridTemplateRows: 'repeat(5, auto)', gap: '0px' }}>
    <Button variant="grey" style={{ width: '300px', backgroundColor: '#F7F7F7' }} placeholder="Хувийн мэдээлэл" />
    <Button style={{ width: '300px', backgroundColor: '#F7F7F7' }} placeholder="Санхүүжүүлсэн төсөл" />
    <Button style={{ width: '300px', backgroundColor: '#F7F7F7' }} placeholder="Төслийн мэдээлэл" />
    <Button style={{ width: '300px', backgroundColor: '#F7F7F7' }} placeholder="Бусад мэдээлэл" />
    <Button style={{ width: '300px', backgroundColor: '#F7F7F7' }} placeholder="Холбоо барих" />
</div>

    </div>
  );
};

export default UserProfile;
