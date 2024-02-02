import React from 'react'
import myImages from './Images'
import { Link } from 'react-router-dom'
import '../Style/PostHouse.css'
import { useState } from 'react'


const PostHouse = () => {
    const [category, setCategory] = useState([]);
    const [propType, setPropType] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const categoryOptions = [
        { value: 'Sale', label: 'Sale' },
        { value: 'Rent', label: 'Rent' },
        // Add more categories as needed
    ];
    const propsType = [
        { value: 'Apartment/Flat', label: 'Apartment/Flat' },
        { value: 'Self Contain', label: 'Self Contain' },
        { value: 'Duplex', label: 'Duplex' },
        { value: 'Semi-detached Duplex', label: 'Semi-detached Duplex' },
        { value: 'Penthouse', label: 'Penthouse' },
        // Add more categories as needed
    ];



    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        console.log(event.target.value);

        // Based on the selected category, set options for the sub-category
        if (selectedCategory === 'Rent') {
            setSubCategoryOptions([
                { value: 'carrot', label: 'Carrot' },
                { value: 'broccoli', label: 'Broccoli' },
                // Add more vegetable options as needed
            ]);
        } else if (selectedCategory === 'Sale') {
            setSubCategoryOptions([
                { value: 'carrot', label: 'Carrot' },
                { value: 'broccoli', label: 'Broccoli' },
                // Add more vegetable options as needed
            ]);
        } else {
            setSubCategoryOptions([]); // Clear options for other categories
        }
    };
    const handleProptypeChange = (event) => {
        const selectedSubCategory = event.target.value;
        setPropType(selectedSubCategory);
        console.log(event.target.value);

        // Based on the selected category, set options for the sub-category
        if (selectedSubCategory === 'Rent') {
            setSubCategoryOptions([
                { value: 'carrot', label: 'Carrot' },
                { value: 'broccoli', label: 'Broccoli' },
                // Add more vegetable options as needed
            ]);
        } else if (selectedSubCategory === 'Sale') {
            setSubCategoryOptions([
                { value: 'carrot', label: 'Carrot' },
                { value: 'broccoli', label: 'Broccoli' },
                // Add more vegetable options as needed
            ]);
        } else {
            setSubCategoryOptions([]); // Clear options for other categories
        }
    };

    const handleFileChange = (event) => {
        // Get the selected file from the event
        const file = event.target.files[0];

        // Update the state with the selected file
        setSelectedFile(file);

        // You can perform additional actions with the file if needed
        console.log('Selected File:', file);
    };
    return (
        <div className='posthouse'>
            <nav>
                <div className='buy-rent'>
                    <div className="iconimg">icon</div>
                    <div>Find an Agent</div>
                    <div>Buy</div>
                    <div>Rent</div>
                </div>

                <div className="links link-extends">
                    <div class="post-black">Favourite homes</div>
                    <Link to="/">
                        <div className="user"><img src={myImages.profileavatar} alt="backgroung_imgcd" /><p>profile</p></div>
                    </Link>
                    <div></div>
                </div>

            </nav >
            <div className='posthead'>
                <div>Post House</div>
                <div>clear</div>
            </div>
            <div className='post-details'>
                <div>
                    <label>Category</label>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="" disabled>Select a category</option>
                        {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {subCategoryOptions.length > 0 && (
                        <div>
                            <label>Sub-Category:</label>
                            <select value={category} onChange={handleCategoryChange}>
                                <option value="" >Select a category</option>
                                {categoryOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
                <div>
                    <label>Property type</label >
                    <select value={propType} onChange={handleProptypeChange}>
                        <option value="" disabled>Select a Property Type</option>
                        {propsType.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div >
                <div>
                    <label>Owners ID</label>
                    <input />
                </div>
                <div>
                    <label>Location</label>
                    <input />
                </div >
                <div>
                    <label>Address</label>
                    <input />
                </div >
                <div>
                    <label>Bedrooms</label>
                    <input />
                </div >
                <div>
                    <label>Bathrooms</label>
                    <input />
                </div >
                <div>
                    <label>Price</label >
                    <input />
                </div >
                <div>
                    <label>Title</label>
                    <input />
                </div >
                <div>
                    <label>Size</label >
                    <input />
                </div>
                <div>
                    <label>Description</label>
                    <input />
                </div >
                <div className='for-photo'>
                    <label className="file-input-label">Add photo</label>
                    <div>First picture - is the title picture. You can change the order of photos: just grab your photos and drag</div>
                    <input type='file' onChange={handleFileChange} className="file-input" />
                    {selectedFile && (
                        <div>
                            <p>Name: {selectedFile.name}</p>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}


export default PostHouse;       