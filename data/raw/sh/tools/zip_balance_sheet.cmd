if exist "../3_balance_sheet/" (
python -m zipfile -c ../3_balance_sheet.zip ../3_balance_sheet/
) else (
echo "file not exist!"
)
pause
