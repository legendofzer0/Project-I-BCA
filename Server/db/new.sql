-- DATABASES

CREATE DATABASE RSTDB;

-- TABLES
-- \c RSTDB;

CREATE TABLE public.users
(
    user_id integer NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    username character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    create_at timestamp with time zone NOT NULL DEFAULT now(),
    phone_number integer NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT users_email_key UNIQUE (email)
)
-- items
-- CREATE TABLE IF NOT EXISTS public.items
-- (
--     item_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
--     itemname "char"[] NOT NULL,
--     ingrediants text[] COLLATE pg_catalog."default" NOT NULL,
--     tags "char"[],
--     CONSTRAINT items_pkey PRIMARY KEY (item_id)
-- )
