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
                    listing_date date,
                    divident_info varchar(8000),
                    is_D7Y int,
                    balance_info varchar(8000),
                    profit_info varchar(8000),
                    price_info varchar(8000),
                    equity_change_info varchar(8000),
                    total_shares int
                )
                ''')
            print "created table security success!"
        else:
            print "table security exists!"

def insert_security_info(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(info["code"],info["listingDate"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('INSERT OR IGNORE INTO security(code, listing_date) VALUES (?,?)', infoArray)
        print "inserted security info!"

def revise_listing_date(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(info["listingDate"],info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET listing_date=? WHERE code=?', infoArray)
        print "updated listing date!"

def fill_divident_info(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(json.dumps(info["dividentInfo"]),int(info["is_D7Y"]),info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET divident_info=?, is_D7Y=? WHERE code=?', infoArray)
        print "filled divident info!"

def fill_balance_info(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(json.dumps(v),k) for k,v in infos.items()]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET balance_info=? WHERE code=?', infoArray)
        print "filled balance info!"

def fill_profit_info(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(json.dumps(v),k) for k,v in infos.items()]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET profit_info=? WHERE code=?', infoArray)
        print "filled profit info!"

def fill_price_info(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(json.dumps(v),k) for k,v in infos.items()]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET price_info=? WHERE code=?', infoArray)
        print "filled price info!"

def fill_total_shares(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(info["totalShares"],info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET total_shares=? WHERE code=?', infoArray)
        print "filled total shares info!"

def fill_equity_change_info(infos):
    conn = sqlite3.connect(dbName)
    infoArray = [(json.dumps(info["equityChangeInfo"]),info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET equity_change_info=? WHERE code=?', infoArray)
        print "filled equity change info!"

def get_valuable_security_info():
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT code,listing_date,divident_info,balance_info,profit_info,price_info,equity_change_info,total_shares FROM security WHERE is_D7Y=1")
        print 'fetched valuable security info!'
        return [{
                    'code':info[0],
                    'listingDate':info[1],
                    'dividentInfo':json.loads(info[2]),
                    'balanceInfo':json.loads(info[3]),
                    'profitInfo':json.loads(info[4]),
                    'priceInfo':json.loads(info[5]),
                    'equityChangeInfo':json.loads(info[6]),
                    'totalShares':info[7]
                } for info in cur.fetchall()]

def delete_security(code):
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        cur.execute('DELETE FROM security WHERE code=?', (code,))
        print "deleted security!", code
