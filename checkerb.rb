#Check if
def isConsecutive(a,b,c,d)
  return ((a != 0)&&(a==b)&&(a==c)&&(a==d)&&(b==c)&&(c==d))
end

def main_Check(tile)
  #matchedArr = [1,2,3,4,5]
  tile.each_with_index do |num, i|
    if isConsecutive(tile[i], tile[i+1], tile[i+2], tile[i+3]) {
      puts "current_index: #{i}"
      puts tile
    }
    end
end


randomizedArr = Array.new(8){Array.new(8){rand(0..2)} }

testArr = [1,1,1,1]

puts "This is a randomized 8X8 Checker board [0 are blanks, 1 are blacks, 2 are reds] :"
main_Check(testArr)
end
