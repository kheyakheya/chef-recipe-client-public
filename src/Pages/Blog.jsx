import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mt-16  text-6xl text-orange-400 font-bold italic'>Questions and Answers</h2>
            <div className='mx-6 my-10 '>
                <div className='mb-4'>
                <p className='font-bold text-xl'>Q-1. Tell us the differences between uncontrolled and controlled components. </p>
                <p className='mt-2'>Ans. Controlled components are the components whose states and and behaviors can be controlled by their parent component. They are dependent on props passed by their parent.</p>
                <p>Uncontrolled components refer to components that manage their own state internally. Uncontrolled components do not use any states on input elements or any event handler. This type of component does not care about an input elements real-time value changes. In the uncontrolled components, we use Refs to access the values of input elements.</p>

                </div>
                <div className='mb-4'>
                <p className='font-bold text-xl'>Q-2. How to validate React props using PropTypes</p>
                <p className='mt-2'>Ans. PropTypes add a internal mechanism in react for checking type of  props of a component.</p>
                <p>
                 <ul className=' mx-8 list-disc'>
                   <li>PropTypes.any: The prop can be of any data type</li> 
                   <li>PropTypes.bool: The prop should be a Boolean</li>
                   <li>PropTypes.number: The prop should be a number</li>
                   <li>PropTypes.string: The prop should be a string</li>
                   <li>PropTypes.func: The prop should be a function</li>
                   <li>PropTypes.array: The prop should be an array</li>
                   <li>PropTypes.object: The prop should be an object</li>
                   <li>PropTypes.symbol: The prop should be a symbol</li>



                    </ul>
                </p>

                </div>
                <div className='mb-4'>
                <p className='font-bold text-xl'>Q-3. Tell us the difference between nodejs and express js.</p>
                <p className='mt-2'>Ans.Node js is used for using javascript code outside the browser. It is an open source and cross-platform runtime environment. Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. </p>
                <p>Express js is a frame work.It is  a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.</p>

                </div>
                <div className='mb-4'>
                <p className='font-bold text-xl'>Q-4. What is a custom hook, and why will you create a custom hook?</p>
                <p className='mt-2'>Custom Hook can call other hooks. It is basically a javascript function that stat with- use</p>
                <p>We us it when we wan to reuse some code in different components. It makes the code simpler.We can just write the function starting with use and put reusable code in it. And export that custom hook. We can import that in another component and use it.</p>

                </div>

            </div>
        </div>
    );
};

export default Blog;