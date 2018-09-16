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
            cur.execute('CREATE TABLE security(code varchar(6) NOT NULL UNIQUE)')
            print "created table security success!"
        else:
            print "table security exists!"

def insert_security_code(codes):
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        code_array = [(code,) for code in codes]
        cur.executemany('INSERT OR IGNORE INTO security VALUES (?)', code_array)
        print "inserted security code!"
