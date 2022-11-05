<base target="_blank">

# e-Commerce API

<a href="#about-the-e-commerce-api">About the e-Commerce API</a> •
<a href="#using-the-e-commerce-api">Using the e-Commerce API</a> •
<a href="#category-api">Category API</a> •
<a href="#product-api">Product API</a> •
<a href="#tag-api">Tag API</a> •
<a href="#technologies-used">Technologies Used</a> 
<a href="#concepts-demonstrated">Concepts Demonstrated</a> •
<a href="#author">Author</a>

-------------------------------------------------------

[Video Demo on YouTube](https://youtu.be/NYqplY8IMUU)

-------------------------------------------------------

## About the e-Commerce API

The e-Commerce API is an API interface to a database relating Category, Product, and Tag info.                    

A Category has many Products. A Product has one Category and many Tags associated with it. Tags have many products associated with it.              

If a GET request is made to one of the appropriate routes, the API will return data about Categories, Products, and Tags in the form of JSON data. If a POST request is made to an appropriate route, the API can create a Category, Product, or Tag. If a PUT request is made to an appropriate route, the API can update a Category, Product, or Tag. If a DELETE request is made to an appropriate route, the API can delete a Category, Product, or Tag.

## Using the e-Commerce API

API Base URL: https://fathomless-river-96310.herokuapp.com/api                         

The base URL for using this api is https://fathomless-river-96310.herokuapp.com/api. Each route has a different URL, all you have to do is make the appropriate request to the base URL concatenated with the API URL in the format specified. To make a GET request for all Categories, for example, you would make a GET request to https://fathomless-river-96310.herokuapp.com/api/categories as https://fathomless-river-96310.herokuapp.com/api is the base route and /categories is the route for that particular action. Each route for each action is listed below.

## Category API

<a href="#get-all-categories">Get All Categories</a> •
<a href="#get-category-by-id">Get Category By ID</a> •
<a href="#create-a-category">Create a Category</a> •
<a href="#update-a-category">Update a Category</a> •
<a href="#delete-a-category">Delete a Category</a>

Each category contains the properties:                      

```id```:&emsp;integer > 0                    
The unique ID of each category. Is an integer greater than 0.                

```category_name```:&emsp;string              
The name of the category.   

### Get All Categories

#### API Route

GET&emsp;```/categories```

#### Response

The API sends back a list of Categories and their associated Product information in the form of JSON data:                

```json
[
	{
		"id": 1,
		"category_name": "Shirts",
		"products": [
			{
				"id": 1,
				"product_name": "Plain T-Shirt",
				"price": 15,
				"stock": 14,
				"category_id": 1
			}
		]
	},
	{
		"id": 2,
		"category_name": "Shorts",
		"products": [
			{
				"id": 5,
				"product_name": "Cargo Shorts",
				"price": 30,
				"stock": 22,
				"category_id": 2
			}
		]
	},
	...
	{
		"id": 5,
		"category_name": "Shoes",
		"products": [
			{
				"id": 2,
				"product_name": "Running Sneakers",
				"price": 90,
				"stock": 25,
				"category_id": 5
			}
		]
	}
]
```

### Get Category By ID

#### API Route

GET&emsp;```/categories/{id}```

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(required)                           
The ID of the category that you wish to get. Must be a positive integer.

#### Response

The API sends back the Category with the specified ID and its associated Product information.                    

A GET request to https://fathomless-river-96310.herokuapp.com/api/categories/1 would give the following response:

```json
{
	"id": 1,
	"category_name": "Shirts",
	"products": [
		{
			"id": 1,
			"product_name": "Plain T-Shirt",
			"price": 15,
			"stock": 14,
			"category_id": 1
		}
	]
}
```

### Create a Category

#### API Route

POST&emsp;```/categories```                 

#### Request Body Parameters

```category_name```&emsp;string&emsp;&emsp;(required)                           
The name of the category you wish to update.

#### Sample Request Body

```json
{
	"category_name": "Pants"
}
```

#### Response

The API creates the Category, and sends back the created Category in response.                        

A POST request to https://fathomless-river-96310.herokuapp.com/api/categories would give the following response:             

```json
{
	"id": 6,
	"category_name": "Pants"
}
```

### Update a Category

#### API Route

PUT&emsp;```/categories/{id}```

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(required)                           
The ID of the category that you wish to update. Must be a positive integer.                           

#### Request Body Parameters

```category_name```&emsp;string&emsp;&emsp;(optional)                           
The name of the category you wish to update.

#### Sample Request Body

```json
{
	"category_name": "Accessories"
}
```

#### Response

On a successful update, the API returns the number of rows updated as JSON.                

The following JSON data is returned on a successful PUT request to https://fathomless-river-96310.herokuapp.com/api/categories/1 with the sample request body above:

```json
[
	1
]
```

### Delete a Category

#### API Route

DELETE&emsp;```/categories{id}```

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(required)                           
The ID of the category that you wish to update. Must be a positive integer.  

#### Response

Sends back the number of Categories deleted.

```json
1
```

## Product API

<a href="#get-all-products">Get All Products</a> •
<a href="#get-product-by-id">Get Product By ID</a> •
<a href="#create-a-product">Create a Product</a> •
<a href="#update-a-product">Update a Product</a> •
<a href="#delete-a-product">Delete a Product</a>

Each product contains the properties:                     
```id```:&emsp;integer > 0                      
The unique ID of each product. Is an integer greater than 0.               

```product_name```:&emsp;string              
The name of the product.                     

```price```:&emsp;decimal                         
The price of the product.                               

```stock```:&emsp;integer > 0                    
The amount of stock of the product.                  

```category_id```:&emsp;integer > 0                      
The ID of the category this product belongs to.                 

### Get All Products

#### API Route

GET&emsp;```/products```

#### Response
            
The API sends back a list of all Products and their associated Category and Tag information.

Sample response:
```json
[
	{
		"id": 1,
		"product_name": "Plain T-Shirt",
		"price": 15,
		"stock": 14,
		"category_id": 1,
		"category": {
			"id": 1,
			"category_name": "Shirts"
		},
		"tags": [
			{
				"id": 6,
				"tag_name": "white",
				"product_tag": {
					"id": 1,
					"product_id": 1,
					"tag_id": 6
				}
			},
			{
				"id": 7,
				"tag_name": "gold",
				"product_tag": {
					"id": 2,
					"product_id": 1,
					"tag_id": 7
				}
			},
			{
				"id": 8,
				"tag_name": "pop culture",
				"product_tag": {
					"id": 3,
					"product_id": 1,
					"tag_id": 8
				}
			}
		]
	},
	{
		"id": 2,
		"product_name": "Running Sneakers",
		"price": 90,
		"stock": 25,
		"category_id": 5,
		"category": {
			"id": 5,
			"category_name": "Shoes"
		},
		"tags": [
			{
				"id": 6,
				"tag_name": "white",
				"product_tag": {
					"id": 4,
					"product_id": 2,
					"tag_id": 6
				}
			}
		]
	},
    ...
    {
	    "id": 5,
		"product_name": "Cargo Shorts",
		"price": 30,
		"stock": 22,
		"category_id": 2,
		"category": {
			"id": 2,
			"category_name": "Shorts"
		},
		"tags": [
			{
				"id": 3,
				"tag_name": "blue",
				"product_tag": {
					"id": 12,
					"product_id": 5,
					"tag_id": 3
				}
			}
		]
	}
]
```

### Get Product By ID

#### API Route

GET&emsp;```/products/{id}```

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(required)                           
The ID of the product that you wish to get. Must be a positive integer.

### Response

The API sends back the Product with the given ID and its associated Category and Tag information.

A GET request made to https://fathomless-river-96310.herokuapp.com/api/products/1 would give the following response:

```json
{
	"id": 1,
	"product_name": "Plain T-Shirt",
	"price": 15,
	"stock": 14,
	"category_id": 1,
	"category": {
		"id": 1,
		"category_name": "Shirts"
	},
	"tags": [
		{
			"id": 6,
			"tag_name": "white",
			"product_tag": {
				"id": 1,
				"product_id": 1,
				"tag_id": 6
			}
		},
		{
			"id": 7,
			"tag_name": "gold",
			"product_tag": {
				"id": 2,
				"product_id": 1,
				"tag_id": 7
			}
		},
		{
			"id": 8,
			"tag_name": "pop culture",
			"product_tag": {
				"id": 3,
				"product_id": 1,
				"tag_id": 8
			}
		}
	]
}
```

### Create a Product

#### API Route

POST&emsp;```/products```                

#### Request Body Parameters            

```product_name```:&emsp;string&emsp;&emsp;(required)                           
The name of the product.                     

```price```:&emsp;decimal&emsp;&emsp;(required)                           
The price of the product.                               

```stock```:&emsp;integer > 0&emsp;&emsp;(required)                           
The amount of stock of the product.                  

```category_id```:&emsp;integer > 0&emsp;&emsp;(required)                           
The ID of the category this product belongs to.              

```tagIds```:&emsp;array of integers&emsp;&emsp;(required)                           
An array of IDs for the tags associated with this product, or an empty array if there are none.                 

#### Sample Request Body

```json
{
	"product_name": "Basketball",
	"price": 50.00,
	"stock": 3,
	"category_id": 7,
	"tagIds": [4]
}
```

#### Response

The API sends back a list of tag-product relationships for the given Product on successful creation.

Sample Response:
```json
[
	{
		"id": 13,
		"product_id": 6,
		"tag_id": 4
	}
]
```

### Update a Product

#### API Route

POST&emsp;```/products/{id}``` 

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(optional)                                     
The ID of the product to update.

#### Request Body Parameters

```product_name```:&emsp;string&emsp;&emsp;(optional)                           
The name of the product.                     

```price```:&emsp;decimal&emsp;&emsp;(optional)                           
The price of the product.                               

```stock```:&emsp;integer > 0&emsp;&emsp;(optional)                            
The amount of stock of the product.                  

```category_id```:&emsp;integer > 0&emsp;&emsp;(optional)                                   
The ID of the category this product belongs to.              

```tagIds```:&emsp;array of integers&emsp;&emsp;(optional)                           
An array of IDs for the tags associated with this product.      

#### Sample Request Body

```json
{
	"product_name": "Red T-Shirt",
	"price": 15,
	"stock": 10,
	"category_id": 1,
	"tagIds": [4, 7, 8]
}
```

#### Response

On a successful Product update, the API sends back the number of Product-Tag relationships removed and the Product-Tag relationships that were created.

Sample Response:
```json
[
	1,
	[
		{
			"id": 14,
			"product_id": "1",
			"tag_id": 4
		}
	]
]
```

### Delete a Product

#### API Route

DELETE&emsp;```/products/{id}``` 

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(required)                                  
The ID of the product to delete.

#### Response

On a successful delete, the API sends back the number of Products deleted, which should be 1.

```json
1
```

## Tag API

<a href="#get-all-tags">Get All Tags</a> •
<a href="#get-tag-by-id">Get Tag By ID</a> •
<a href="#create-a-tag">Create a Tag</a> •
<a href="#update-a-tag">Update a Tag</a> •
<a href="#delete-a-tag">Delete a Tag</a>

Each tag contains the properties:                     
```id```:&emsp;integer > 0                      
The unique ID of each tag. Is an integer greater than 0.               

```tag_name```:&emsp;string              
The name of the tag.                     

### Get all Tags

#### API Route

GET&emsp;```/tags```

#### Response

The API sends back a list of all Tags and their associated Products, in the form of JSON data.

Sample Response:
```json
[
	{
		"id": 1,
		"tag_name": "rock music",
		"products": [
			{
				"id": 3,
				"product_name": "Branded Baseball Hat",
				"price": 23,
				"stock": 12,
				"category_id": 4,
				"product_tag": {
					"id": 5,
					"product_id": 3,
					"tag_id": 1
				}
			},
			{
				"id": 4,
				"product_name": "Top 40 Music Compilation Vinyl Record",
				"price": 13,
				"stock": 50,
				"category_id": 3,
				"product_tag": {
					"id": 9,
					"product_id": 4,
					"tag_id": 1
				}
			}
		]
	},
	{
		"id": 2,
		"tag_name": "pop music",
		"products": [
			{
				"id": 4,
				"product_name": "Top 40 Music Compilation Vinyl Record",
				"price": 13,
				"stock": 50,
				"category_id": 3,
				"product_tag": {
					"id": 10,
					"product_id": 4,
					"tag_id": 2
				}
			}
		]
	},
	...
	{
		"id": 8,
		"tag_name": "pop culture",
		"products": [
			{
				"id": 1,
				"product_name": "Plain T-Shirt",
				"price": 15,
				"stock": 14,
				"category_id": 1,
				"product_tag": {
					"id": 3,
					"product_id": 1,
					"tag_id": 8
				}
			},
			{
				"id": 4,
				"product_name": "Top 40 Music Compilation Vinyl Record",
				"price": 13,
				"stock": 50,
				"category_id": 3,
				"product_tag": {
					"id": 11,
					"product_id": 4,
					"tag_id": 8
				}
			}
		]
	}
]
```

### Get Tag By ID

#### API Route

GET&emsp;```/tags/{id}```

#### Request URL Parameters

```id```&emsp;integer > 0&emsp;&emsp;(required)                           
The ID of the tag that you wish to get. Must be a positive integer.

#### Response

The API sends back the Tag with the given ID as JSON data in response.

A GET request made to https://fathomless-river-96310.herokuapp.com/api/tags/1 would give the following response:
```json
{
	"id": 1,
	"tag_name": "rock music",
	"products": [
		{
			"id": 3,
			"product_name": "Branded Baseball Hat",
			"price": 23,
			"stock": 12,
			"category_id": 4,
			"product_tag": {
				"id": 5,
				"product_id": 3,
				"tag_id": 1
			}
		},
		{
			"id": 4,
			"product_name": "Top 40 Music Compilation Vinyl Record",
			"price": 13,
			"stock": 50,
			"category_id": 3,
			"product_tag": {
				"id": 9,
				"product_id": 4,
				"tag_id": 1
			}
		}
	]
}
```

### Create a Tag

#### API Route

POST&emsp;```/tags```              

#### Request Body Parameters           

```tag_name```:&emsp;string&emsp;&emsp;(required)                              
The name of the tag.        

```productIds```:&emsp;array of integers&emsp;&emsp;(required)                           
An array containing the IDs of the products associated with this tag, or an empty array if there are none.                   

#### Sample Request Body

```json
{
	"tag_name": "sports",
	"productIds": [2, 3]
}
```

#### Response

On successful Tag creation, the API sends back a list of Product-Tag relationships created in response.

A POST request made to https://fathomless-river-96310.herokuapp.com/api/tags with the above sample request body above would give the following response:
```json
[
	{
		"id": 13,
		"product_id": 2,
		"tag_id": 9
	},
	{
		"id": 14,
		"product_id": 3,
		"tag_id": 9
	}
]
```

### Update a Tag

#### API Route

PUT&emsp;```/tags/{id}```  

#### Request URL Parameters

```id```:&emsp;integer > 0&emsp;&emsp;(required)                                  
The unique ID of the tag to update.       

#### Request Body Parameters

```tag_name```:&emsp;string&emsp;&emsp;(optional)                           
The name of the tag.    

```productIds```:&emsp;array of integers&emsp;&emsp;(required)                           
An array containing the IDs of the products associated with this tag, or an empty array if there are none.        

#### Sample Request Body

```json
{
	"tag_name": "sports",
	"productIds": [2, 4]
}
```

#### Response

On a successful Tag update, the API sends back the number of Product-Tag relationships removed and the new Product-Tag relationships created.

A PUT request made to https://fathomless-river-96310.herokuapp.com/api/tags/9 with the above sample request body above would give the following response:
```json
[
	1,
	[
		{
			"id": 15,
			"product_id": 4,
			"tag_id": "9"
		}
	]
]
```

### Delete a Tag

#### API Route

DELETE&emsp;```/tags/{id}```     

#### Request URL Parameters             

```id```:&emsp;integer > 0&emsp;&emsp;(required)                                  
The ID of the tag you wish to update                  

#### Response

Returns the number of Tags deleted, which will always be 1 except on error.

```json
1
```

## Technologies Used

- [Sequelize](https://sequelize.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Express.js](https://expressjs.com/)
- [dotenv Package](https://www.npmjs.com/package/dotenv)
- [node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)

## Concepts Demonstrated

- Modelling data relationships using mysql2 and sequelize
- Setting up a server using express.js
- The use of node.js
- Installing and using node.js packages using npm.
- General JavaScript and programming knowledge.

## Author

Adam Ferro
- [Github](https://github.com/GeminiAd)
- [Linked-In](https://www.linkedin.com/in/adam-ferro)