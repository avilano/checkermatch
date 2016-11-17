#!/usr/bin/perl
use strict;
use warnings;

#Subroutine to randomize the 2D Array:
sub randPattern {
my ($rand_ref) = @_[0];
my @RandBoard = @$rand_ref;

for (my $i = 0; $i <= $#RandBoard; $i++) {
  for (my $j = 0; $j <= $#RandBoard ; $j++) {
     $RandBoard[$i][$j] = 0 + int(rand(3 - 0));
     print "$RandBoard[$i][$j] ";
   }
   print "\n";
  }

return @RandBoard;
}

sub mainCheck(tile) { # note that j is X-coordinate and i is Y-coordinate

  #array for matched tiles
  my @matchedArr = [];

  #checks vertically
  for (my $i = 0; $i < 5; $i++) {
    for (my $j = 0; $j < 8; $j++) {
      if ( isConsecutive(tile[$i][$i], tile[$i+1][$i], tile[$i+2][$i], tile[$i+3][$i]) && tile[$i][$i]==1 ) {
          matchedArr.push(["Black | Vertically Down from:",j+1,i+1]);
      } else if ( isConsecutive(tile[$i][$i], tile[$i+1][$i], tile[$i+2][$i], tile[$i+3][$i]) && tile[$i][$i]==2 ) {
          matchedArr.push(["Red | Vertically Down from: #{$j+1,$i+1]}");
      }
    }
  }
  #checks horizontally
  for (my $i = 0; $i  < 8; $i++) {
    for (my $j = 0; $j < 5; $j++) {
      if ( isConsecutive(tile[$i][$j], tile[$i][$j+1], tile[$i][$j+2], tile[$i][$i+3]) && tile[$i][$i]==1 ) {
          matchedArr.push(["Black | Horizontally right from: #{$j+1,$i+1]}");
      } else if ( isConsecutive(tile[$i][$i], tile[$i][$i+1], tile[$i][$i+2], tile[$i][$i+3]) && tile[$i][$i]==2 ) {
          matchedArr.push(["Red | Horizontally right from: #{$j+1,$i+1]}");
      }
    }
  }
  #checks diagonally-right
  for (my $i = 0; $i  < 5; $i++) {
    for (my $j = 0; $j < 5; $j++) {
      if ( isConsecutive(tile[$i][$i], tile[$i+1][$i+1], tile[$i+2][$i+2], tile[$i+3][$i+3]) && tile[$i][$i]==1 ) {
          matchedArr.push(["Black | Diagonally Down from: #{$j+1,$i+1]}");
      } else if ( isConsecutive(tile[$i][$i], tile[$i+1][$i+1], tile[$i+2][$i+2], tile[$i+3][$i+3]) && tile[$i][$i]==2 ) {
          matchedArr.push(["Red | Diagonally Down from: #{$j+1,$i+1]}");
      }
    }
  }
  #checks diagonally-left
  for (my $i = 3; $i  < 8; $i++) {
    for (my $j = 0; $j < 5; $j++) {
      if ( isConsecutive(tile[$i][$i], tile[$i-1][$i+1], tile[$i-2][$i+2], tile[$i-3][$i+3]) && tile[$i][$i]==1 ) {
          matchedArr.push(["Black | Diagonally Up from: #{$j+1,$i+1]}");
      } else if ( isConsecutive(tile[$i][$i], tile[$i-1][$i+1], tile[$i-2][$i+2], tile[$i-3][$i+3]) && tile[$i][$i]==1 ) {
          matchedArr.push(["Red | Diagonally Down from: #{$j+1,$i+1]}");
      }
    }
  }

my @checkerArr =  (
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
);

my ($randomizedArr_ref) = [randPattern(\@checkerArr)]; #sending array as reference
my @randomizedArr = @$randomizedArr_ref; #dereferencing the returned array
print "___________________\n";

foreach (@randomizedArr){
    print(join(' ',@$_),"\n");
}
print "___________________\n";
