if exist "../4_profit_sheet.zip" (
python -m zipfile -e ../4_profit_sheet.zip ..
) else (
echo "file not exist!"
)

pause
