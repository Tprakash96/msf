CREATE TABLE IF NOT EXISTS users(id VARCHAR(40) UNIQUE NOT NULL,email VARCHAR(60) UNIQUE NOT NULL, password VARCHAR(100) NOT NULL,is_active TINYINT(1) NOT NULL DEFAULT 1,created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS products(id VARCHAR(40) UNIQUE NOT NULL,code VARCHAR(40) UNIQUE NOT NULL, name VARCHAR(256) NOT NULL,price_per_unit DECIMAL(10,2) NOT NULL,gst TINYINT NOT NULL,is_active TINYINT(1)  NOT NULL DEFAULT 1,created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,created_by VARCHAR(100) NOT NULL,updated_by VARCHAR(100) NOT NULL);
CREATE TABLE IF NOT EXISTS bills(id VARCHAR(40) UNIQUE NOT NULL,product_code VARCHAR(40) UNIQUE NOT NULL, price_per_unit DECIMAL(10,2) NOT NULL,price DECIMAL(20,2) NOT NULL,gst TINYINT NOT NULL ,total_price DECIMAL(20,2) NOT NULL,bill_date date NOT NULL,is_active  TINYINT(1)  NOT NULL DEFAULT 1,created_at TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP,updated_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,created_by VARCHAR(100) NOT NULL,updated_by VARCHAR(100) NOT NULL);