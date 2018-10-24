if exist "../4_profit_sheet/" (
python -m zipfile -c ../4_profit_sheet.zip ../4_profit_sheet/
) else (
echo "file not exist!"
)
pause
