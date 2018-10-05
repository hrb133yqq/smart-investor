# -*- coding: utf-8 -*-
import sqlite3

refined_sh = "../../../data/refined/sh/"
dbName = refined_sh + "security.db"

def init_db():
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT COUNT(1) FROM sqlite_master WHERE type='table' AND name='security'")
        exist = cur.fetchone()[0]
        if not exist:
            cur.execute('CREATE TABLE security(code varchar(6) NOT NULL UNIQUE, listingdate date)')
            print "created table security success!"
        else:
            print "table security exists!"

def insert_security_info(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(info["code"],info["listingdate"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('INSERT OR IGNORE INTO security VALUES (?,?)', info_array)
        print "inserted security info!"

def update_listing_date(infos):
    conn = sqlite3.connect(dbName)
    info_array = [(info["listingdate"],info["code"]) for info in infos]
    with conn:
        cur = conn.cursor()
        cur.executemany('UPDATE security SET listingdate=? WHERE code=?', info_array)
        print "updated listing date!"
