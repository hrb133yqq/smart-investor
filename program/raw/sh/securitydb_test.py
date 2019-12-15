# -*- coding: utf-8 -*-
import sqlite3

refined_sh = "../../../data/refined/sh/"
dbName = refined_sh + "security.db"

def get_security_total_shares():
    conn = sqlite3.connect(dbName)
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT total_shares FROM security where code='601668'")
        print 'total_shares for 601668!'
        print cur.fetchall()
get_security_total_shares()
