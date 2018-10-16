if exist "../3_balance_sheet.zip" (
python -m zipfile -e ../3_balance_sheet.zip ..
) else (
echo "file not exist!"
)

pause