#!/usr/bin/perl
use strict;
use warnings;

#Randomizes the 2D Array
sub randPattern {
my ($rand_ref) = @_;
my @RandBoard = @{ $rand_ref };

for (my $i = 0; $i <= $#RandBoard; $i++) {
  for (my $j = 0; $j <= $#RandBoard ; $j++) {
     $RandBoard[$i][$j] = 0 + int(rand(3 - 0));
     #print "$RandBoard[$i][$j] ";
   }
   #print "\n";
  }
  return @RandBoard;
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

my @randomizedArr = randPattern(\@checkerArr);
print @randomizedArr, "\n";
