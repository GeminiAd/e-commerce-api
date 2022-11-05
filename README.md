<base target="_blank">

# e-Commerce API

<a href="#description">Description</a> •
<a href="#key-features">Key Features</a> •
<a href="#usage">Usage</a> •
<a href="#technologies-used">Technologies Used</a> •
<a href="#concepts-demonstrated">Concepts Demonstrated</a> •
<a href="#author">Author</a>

-------------------------------------------------------

[Video Demo on YouTube](#TODO)

-------------------------------------------------------

## About the e-Commerce API



## Category API

### Properties

Each category contains the properties:                      

```id```:&emsp;integer > 0                    
The unique ID of each category. Is an integer greater than 0.                

```category_name```:&emsp;string              
The name of the category.   

### Get All Categories

#### API Route

GET&emsp;```/categories```

#### Sample Response
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
	{
		"id": 3,
		"category_name": "Music",
		"products": [
			{
				"id": 4,
				"product_name": "Top 40 Music Compilation Vinyl Record",
				"price": 13,
				"stock": 50,
				"category_id": 3
			}
		]
	},
	{
		"id": 4,
		"category_name": "Hats",
		"products": [
			{
				"id": 3,
				"product_name": "Branded Baseball Hat",
				"price": 23,
				"stock": 12,
				"category_id": 4
			}
		]
	},
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

#### Parameters

```id```&emsp;integer > 0           
The ID of the category that you wish to get. Must be a positive integer.

#### Sample Response
                        
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

#### Parameters

```category_name```&emsp;string               
The name of the category you wish to update.

#### Sample Request Body

```json
{
	"category_name": "Pants"
}
```

#### Sample Response

```json
{
	"id": 6,
	"category_name": "Pants"
}
```

### Update a Category

#### API Route

PUT&emsp;```/categories/{id}```

#### Parameters

```id```&emsp;integer > 0           
The ID of the category that you wish to update. Must be a positive integer.                           
                     
```category_name```&emsp;string               
The name of the category you wish to update.

#### Request Body

```json
{
	"category_name": "Accessories"
}
```

#### Sample Response

```json
[
	1
]
```

### Delete a Category

#### API Route

DELETE&emsp;```/categories{id}```

#### Parameters

```id```&emsp;integer > 0           
The ID of the category that you wish to update. Must be a positive integer.  

#### Sample Response

```json
1
```

## Product API

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

#### Parameters

```id```&emsp;integer > 0                         
The ID of the product that you wish to get. Must be a positive integer.

### Response

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

#### Parameters            

```product_name```:&emsp;string              
The name of the product.                     

```price```:&emsp;decimal                         
The price of the product.                               

```stock```:&emsp;integer > 0                    
The amount of stock of the product.                  

```category_id```:&emsp;integer > 0                      
The ID of the category this product belongs to.              

```tagIds```:&emsp;array of integers                     
An array of IDs for the tags associated with this product.                 

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

#### Parameters

```id```&emsp;integer > 0                         
The ID of the product to update.

```product_name```:&emsp;string              
The name of the product.                     

```price```:&emsp;decimal                         
The price of the product.                               

```stock```:&emsp;integer > 0                    
The amount of stock of the product.                  

```category_id```:&emsp;integer > 0                      
The ID of the category this product belongs to.              

```tagIds```:&emsp;array of integers                     
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

#### Parameters

```id```&emsp;integer > 0                         
The ID of the product to delete.

#### Response

```json
1
```

## Tag API

Each tag contains the properties:                     
```id```:&emsp;integer > 0                      
The unique ID of each tag. Is an integer greater than 0.               

```tag_name```:&emsp;string              
The name of the tag.                     

### Get all Tags

#### API Route

GET&emsp;```/tags```

#### Response

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

#### Parameters

```id```&emsp;integer > 0
The ID of the tag that you wish to get. Must be a positive integer.

#### Response

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

#### Parameters           

```tag_name```:&emsp;string              
The name of the tag.        

```productIds```:&emsp;array of integers              
An array containing the IDs of the products associated with this tag, or an empty array if there are none.                   

#### Sample Request Body

```json
{
	"tag_name": "sports",
	"productIds": [2, 3]
}
```

#### Response

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

#### Parameters

```id```:&emsp;integer > 0                      
The unique ID of the tag to update.                               

```tag_name```:&emsp;string              
The name of the tag.    

```productIds```:&emsp;array of integers              
An array containing the IDs of the products associated with this tag, or an empty array if there are none.        

#### Sample Request Body

```json
{
	"tag_name": "sports",
	"productIds": [2, 4]
}
```

#### Response

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

#### Parameters             

```id```:&emsp;integer > 0                      
The ID of the tag you wish to update                  

#### Response

```json
1
```

## Key Features



## Technologies Used

- [Sequelize](https://sequelize.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Express.js](https://expressjs.com/)
- [dotenv Package](https://www.npmjs.com/package/dotenv)
- [node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)

## Concepts Demonstrated

- The use of node.js
- Installing and using node.js packages using npm.
- General JavaScript and programming knowledge.

## Author

Adam Ferro
- [Github](https://github.com/GeminiAd)
- [Linked-In](https://www.linkedin.com/in/adam-ferro)