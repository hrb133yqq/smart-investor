# -*- coding: utf-8 -*-
import sqlite3
import json

refined_sh = "../../../data/refined/sh/"
dbName = refined_sh + "security.db"

def init_db():
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT COUNT(1) FROM sqlite_master WHERE type='table' AND name='security'")
        exist = cur.fetchone()[0]
        if not exist:
            cur.execute('''
                CREATE TABLE security(
                    code varchar(6) NOT NULL UNIQUE,
                    listingdate date,
                    divident_info varchar(8000),
                    is_D7Y int,
                    balance_info varchar(8000),
                    profit_info varchar(8000),
                    price varchar(8000)
                )
                ''')
            print "created table security success!"
        else:
            print "table security exists!"

def insert_security_info(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(info["code"],info["listingdate"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('INSERT OR IGNORE INTO security(code, listingdate) VALUES (?,?)', info_array)
        print "inserted security info!"

def revise_listing_date(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(info["listingdate"],info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET listingdate=? WHERE code=?', info_array)
        print "updated listing date!"

def fill_divident_info(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(json.dumps(info["divident_info"]),int(info["is_D7Y"]),info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET divident_info=?, is_D7Y=? WHERE code=?', info_array)
        print "filled divident info!"

def fill_balance_info(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(json.dumps(v),k) for k,v in infos.items()]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET balance_info=? WHERE code=?', info_array)
        print "filled balance info!"

def fill_profit_info(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(json.dumps(v),k) for k,v in infos.items()]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET profit_info=? WHERE code=?', info_array)
        print "filled profit info!"
