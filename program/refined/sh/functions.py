def readlines(fileName):
    lines=[]
    with open(fileName, "r") as file:
        for line in file:
            lines.append(line)
    return lines
