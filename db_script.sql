CREATE SEQUENCE cryptocurrencies_id_seq START 1;

CREATE TABLE cryptocurrencies (
    id integer NOT NULL DEFAULT nextval('cryptocurrencies_id_seq') PRIMARY KEY,
    symbol VARCHAR(255),
    name VARCHAR(255),
    current_price NUMERIC(18, 2),
    market_cap NUMERIC(18),
    market_cap_rank INT,
    total_volume NUMERIC(18),
    high_24h NUMERIC(18, 2),
    low_24h NUMERIC(18, 2),
    last_updated TIMESTAMP,
    price_change_percentage_14d_in_currency NUMERIC(18, 5),
    price_change_percentage_1h_in_currency NUMERIC(18, 5),
    price_change_percentage_1y_in_currency NUMERIC(18, 5),
    price_change_percentage_200d_in_currency NUMERIC(18, 5),
    price_change_percentage_24h_in_currency NUMERIC(18, 5),
    price_change_percentage_30d_in_currency NUMERIC(18, 5),
    price_change_percentage_7d_in_currency NUMERIC(18, 5)
);