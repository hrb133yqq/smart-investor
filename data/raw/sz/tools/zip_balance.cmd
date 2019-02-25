if exist "../3_balance/" (
python -m zipfile -c ../3_balance.zip ../3_balance/
) else (
echo "file not exist!"
)
pause
