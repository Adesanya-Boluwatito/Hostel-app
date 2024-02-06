import React from 'react'
import myImages from './Images'
import { Link } from 'react-router-dom'
import '../Style/PostHouse.css'
import { useState } from 'react'


const PostHouse = () => {
    const [category, setCategory] = useState([]);
    const [propType, setPropType] = useState([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    // const [selectedFile, setSelectedFile] = useState(null);
    // const [imageSrc, setImageSrc] = useState(null);
    const [imageSrcList, setImageSrcList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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
        const files = event.target.files;

        // Check if the number of selected files is more than seven
        if (files.length + imageSrcList.length > 7) {
            setErrorMessage('You can upload up to seven images.');
            return;
        }

        // Loop through the selected files
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Check if the file is an image
            if (!file.type.startsWith('image/')) {
                setErrorMessage('Please select only image files.');
                return;
            }

            const reader = new FileReader();

            // Set up the event handler for when the reading is completed
            reader.onloadend = () => {
                // Update the image source list with the new image source
                setImageSrcList((prevImageSrcList) => [...prevImageSrcList, reader.result]);
            };

            // Read the contents of the current file as a data URL
            reader.readAsDataURL(file);
        }

        // Clear any previous error messages
        setErrorMessage('');
    };
    // const handleFileChange = (event) => {
    //     const files = event.target.files;

    //     // Loop through the selected files
    //     for (let i = 0; i < files.length; i++) {
    //         const file = files[i];
    //         const reader = new FileReader();

    //         // Set up the event handler for when the reading is completed
    //         reader.onloadend = () => {
    //             // Update the image source list with the new image source
    //             setImageSrcList((prevImageSrcList) => [...prevImageSrcList, reader.result]);
    //         };

    //         // Read the contents of the current file as a data URL
    //         reader.readAsDataURL(file);
    //     }
    // };

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
                    <div className='for-add-image'>
                        <div className='add-image'>
                            <img src={myImages.plusIcon} alt='add-icon' />
                            <input type='file' onChange={handleFileChange} className="file-input" />
                        </div>
                        {/* Display the preview of each selected image */}
                        {imageSrcList.map((imageSrc, index) => (
                            <img key={index} src={imageSrc} alt={`Preview ${index + 1}`} style={{ width: '100px', height: 'auto' }} />
                        ))}
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                </div>
            </div >
        </div >
    )
}


export default PostHouse;       