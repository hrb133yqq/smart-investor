if exist "../3_balance.zip" (
python -m zipfile -e ../3_balance.zip ..
) else (
echo "file not exist!"
)

pause
