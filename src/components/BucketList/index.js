import React, { useState } from 'react';
import Bucket from './../Bucket';
import styles from "./bucketlist.module.css";

function BucketList() {
    const [bucket, setBucket] = useState("Mt. Rushmore");
    const[bucketList, setBucketList] = useState([]);

    // set the bucket as typing
    const handleChange = (e) => {
        setBucket(e.target.value);
    };

    // adds the bucket to the list when clicking submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setBucketList((bucketList) => [ ...bucketList, bucket]);
    };

    return (
      <div>
        <h1 className={styles.bucket}>Welcome to the bucket list, give me all your buckets!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add to your bucket list"
            name="text"
            value={bucket}
            onChange={handleChange}
          ></input>
          <button>add bucket list item</button>
        </form>
            <ul>
                {bucketList.map((item, index) => (
                    <Bucket key={index}>{item}</Bucket>
                ))}
            </ul>
       </div>
    );
}

export default BucketList