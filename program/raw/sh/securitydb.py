# -*- coding: utf-8 -*-
import sqlite3

refined_sh = "../../../data/refined/sh/"
dbName = refined_sh + "security.db"

def get_security_code():
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT code FROM security")
        print 'fetched all security code!'
        return [code[0] for code in cur.fetchall()]

def get_security_info():
    conn = sqlite3.connect(dbName, detect_types=sqlite3.PARSE_DECLTYPES)
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT code, listingdate FROM security")
        print 'fetched all security code!'
        return [{'code':info[0], 'listingdate':info[1]} for info in cur.fetchall()]
