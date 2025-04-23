
# Project

## **Users**

### **POST /api/users/register/**

- **Description**: Registers a new user.

### **POST /api/users/login/**

- **Description**: Logs in a user and returns an access token and refresh token.


### **POST /api/token/refresh/**

- **Description**: Refreshes the access token using a valid refresh token.


---

## **Products**

### **GET /api/products/**

- **Description**: Retrieves a list of all products.


### **GET /api/products/<int:pk>/**

- **Description**: Retrieves the details of a specific product by its ID.


### **GET /api/products/category/<int:category_id>/**

- **Description**: Retrieves a list of products filtered by category.


---

## **Orders**

### **POST /api/order/**

- **Description**: Creates a new order.

### **GET /api/my-orders/**

- **Description**: Retrieves a list of orders for the authenticated user.

---

## **Categories**

### **GET /api/categories/**

- **Description**: Retrieves a list of all product categories.


---

## **Authentication and Authorization**

### **POST /api/token/refresh/**

- **Description**: Refreshes an access token using a valid refresh token.

---


## **CORS Configuration**

The API allows requests from `http://localhost:4200` (the default Angular development server URL). If you're accessing the API from a different domain, ensure to update the CORS settings in the `settings.py` file.

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",  
