## You can visit this website <a href="https://mhasan1037.github.io/e-commerce/">Here</a>

<h2>This is a react project.</h2>
<br>
The header is made with react router. It routes to 3 different pages and a cart page. I have wrapped the browserRouter with useContext to pass different data to different pages. 
In the homepage there is a carousel. I have used a library to make it.
After the carousel there is a product section. I have used a small API to fetch data for the product section. I made a custom hook to fetch data because I will use the same code in different pages. 
<br>
After mapping the API data I have inserted the image and title inside react router Link. If you click the Link it will pass the product ID to the detail page. There I have used the ID to filter details of the particular product from the API using the custom hook. There are similar products in each detail page. I have filtered the category of the detail page product with other product of the API.
<br>
With each product there is an “Add To Cart” button. If you click the button the product ID will be saved in the localstorage and the useContext hook will increase the product number in the cart icon above in the navigation bar. If you click the cart icon from the navigation bar, you will be directed to the cart component. There you can see the product you have added to the cart. I have filtered the product information from the API using the id saved in the localstorage. 
<br>
There is a “X” icon. If you click the icon it will take the id of the product and will filter all the product except this one. It will also update the localstorage data.


