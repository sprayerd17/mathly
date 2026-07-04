'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import NavAuth from '@/app/components/NavAuth'
import { useAuth, getActiveChild, getActiveTier } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

type Topic = {
  slug: string
  name: string
  description: string
  free: boolean
}

const defaultTopics: Topic[] = [
  {
    slug: 'topic-1',
    name: 'Topic 1',
    description: 'Foundational concepts and key definitions to build your understanding.',
    free: true,
  },
  {
    slug: 'topic-2',
    name: 'Topic 2',
    description: 'Core techniques and step-by-step methods explained clearly.',
    free: false,
  },
  {
    slug: 'topic-3',
    name: 'Topic 3',
    description: 'Visual approaches and real-world applications of the concept.',
    free: false,
  },
  {
    slug: 'topic-4',
    name: 'Topic 4',
    description: 'Practice patterns and common problem types you will encounter.',
    free: false,
  },
  {
    slug: 'topic-5',
    name: 'Topic 5',
    description: 'Deeper exploration with worked examples and key formulas.',
    free: false,
  },
  {
    slug: 'topic-6',
    name: 'Topic 6',
    description: 'Advanced techniques that build on earlier concepts in this grade.',
    free: false,
  },
  {
    slug: 'topic-7',
    name: 'Topic 7',
    description: 'Mixed problem solving with strategy guides and common mistakes to avoid.',
    free: false,
  },
  {
    slug: 'topic-8',
    name: 'Topic 8',
    description: 'Review and consolidation with exam-style questions and model answers.',
    free: false,
  },
]

const grade4Topics: Topic[] = [
  {
    slug: 'numbers-operations',
    name: 'Whole Numbers — Counting, Ordering & Place Value',
    description: 'Learn about place value, expanded notation, counting in intervals, comparing and ordering numbers, rounding off and number lines.',
    free: true,
  },
  {
    slug: 'addition-subtraction',
    name: 'Addition & Subtraction',
    description: 'Master column addition and subtraction with carrying and borrowing, estimating, inverse operations, mental calculations and money problems.',
    free: false,
  },
  {
    slug: 'multiplication',
    name: 'Multiplication',
    description: 'Understand multiplication as repeated addition, learn your times tables, multiply 2-digit numbers, use factors and estimate products.',
    free: false,
  },
  {
    slug: 'division',
    name: 'Division',
    description: 'Learn sharing and grouping, use multiplication facts to divide, work with remainders, long division and division word problems.',
    free: false,
  },
  {
    slug: 'number-sentences',
    name: 'Number Sentences',
    description: 'Understand equations and inequalities, solve open number sentences, find missing values and translate word problems into number sentences.',
    free: false,
  },
  {
    slug: 'common-fractions',
    name: 'Common Fractions',
    description: 'Understand fractions as equal parts of a whole, compare and order fractions, find equivalent fractions, calculate a fraction of a whole number and add fractions with the same denominator.',
    free: false,
  },
  {
    slug: 'number-patterns',
    name: 'Number Patterns',
    description: 'Identify and extend number patterns, skip count in different intervals, work with input and output values, find missing numbers and create your own patterns.',
    free: false,
  },
  {
    slug: 'geometric-patterns',
    name: 'Geometric Patterns',
    description: 'Identify repeating and growing geometric patterns, extend patterns, explore colour and shape patterns, learn about tessellation and create your own geometric patterns.',
    free: false,
  },
  {
    slug: 'symmetry',
    name: 'Symmetry',
    description: 'Recognise lines of symmetry in 2D shapes, identify shapes with one or more lines of symmetry, draw the other half of a symmetrical figure and find symmetry in real life and the alphabet.',
    free: false,
  },
  {
    slug: '2d-shapes',
    name: '2D Shapes',
    description: 'Identify and describe 2D shapes, sort and classify polygons, compare shapes by their properties and find 2D shapes in everyday life.',
    free: false,
  },
  {
    slug: '3d-objects',
    name: '3D Objects',
    description: 'Identify and describe 3D objects, sort and classify by properties, compare 2D shapes with 3D object faces and find 3D objects in everyday life.',
    free: false,
  },
  {
    slug: 'position-movement',
    name: 'Position and Movement',
    description: 'Describe position using direction words, locate objects on a grid using row and column references, follow and give directions and understand full, half and quarter turns clockwise and anticlockwise.',
    free: false,
  },
  {
    slug: 'transformations',
    name: 'Transformations',
    description: 'Learn about translation (sliding), reflection (flipping) and rotation (turning), build composite shapes and create tessellating patterns using transformations.',
    free: false,
  },
  {
    slug: 'length',
    name: 'Length',
    description: 'Measure and convert between millimetres, centimetres, metres and kilometres, estimate lengths, calculate with length and solve word problems.',
    free: false,
  },
  {
    slug: 'mass',
    name: 'Mass',
    description: 'Measure and convert between grams and kilograms, estimate mass, read scales and solve word problems involving mass.',
    free: false,
  },
  {
    slug: 'capacity-volume',
    name: 'Capacity and Volume',
    description: 'Measure and convert between millilitres and litres, estimate capacity, read measuring containers and calculate volume using unit cubes.',
    free: false,
  },
  {
    slug: 'perimeter-area',
    name: 'Perimeter and Area',
    description: 'Calculate the perimeter of polygons by adding sides, calculate area by counting square units and solve problems involving perimeter and area.',
    free: false,
  },
  {
    slug: 'time',
    name: 'Time',
    description: 'Read analogue and digital clocks, convert between hours, minutes and seconds, calculate duration and solve time word problems.',
    free: false,
  },
  {
    slug: 'data-handling',
    name: 'Data Handling',
    description: 'Collect and organise data using tally marks, represent data in pictographs and bar graphs, read and interpret graphs and analyse results.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Use language of probability, identify certain, impossible and uncertain events, list outcomes of experiments and compare predicted with actual results.',
    free: false,
  },
]

const grade5Topics: Topic[] = [
  {
    slug: 'numbers-place-value',
    name: 'Whole Numbers — Counting, Ordering & Place Value',
    description: 'Explore place value up to 6-digit numbers, expanded notation, counting in intervals, comparing and ordering numbers, rounding off and representing numbers on a number line.',
    free: true,
  },
  {
    slug: 'addition-subtraction',
    name: 'Addition & Subtraction',
    description: 'Master addition and subtraction of whole numbers up to 6 digits, including column methods, estimation, inverse operations, mental strategies and multi-step word problems.',
    free: false,
  },
  {
    slug: 'multiplication',
    name: 'Multiplication',
    description: 'Multiply whole numbers by 2-digit numbers using column multiplication, apply properties of multiplication, estimate products and solve multiplication word problems.',
    free: false,
  },
  {
    slug: 'division',
    name: 'Division',
    description: 'Divide whole numbers by 2-digit divisors, interpret remainders, use long division, check answers using inverse operations and solve division word problems.',
    free: false,
  },
  {
    slug: 'number-sentences',
    name: 'Number Sentences',
    description: 'Write and solve number sentences with one or two operations, work with equations and inequalities, find missing values and use number sentences to model real-life situations.',
    free: false,
  },
  {
    slug: 'common-fractions',
    name: 'Common Fractions',
    description: 'Compare and order common fractions, find equivalent fractions, add and subtract fractions with different denominators, and calculate fractions of whole numbers and quantities.',
    free: false,
  },
  {
    slug: 'decimal-fractions',
    name: 'Decimal Fractions',
    description: 'Understand decimal notation and place value to hundredths, convert between decimals and common fractions, order decimals, and add and subtract decimal fractions.',
    free: false,
  },
  {
    slug: 'number-patterns',
    name: 'Number Patterns',
    description: 'Investigate and extend number patterns involving whole numbers, fractions and decimals, find rules for patterns and represent input-output relationships in tables.',
    free: false,
  },
  {
    slug: 'geometric-patterns',
    name: 'Geometric Patterns',
    description: 'Identify, describe and extend geometric patterns, represent patterns using tables and rules, and create your own growing and repeating geometric patterns.',
    free: false,
  },
  {
    slug: 'symmetry',
    name: 'Symmetry',
    description: 'Identify lines of symmetry in regular and irregular polygons, complete symmetrical figures, and explore symmetry in letters, shapes and real-world objects.',
    free: false,
  },
  {
    slug: '2d-shapes',
    name: '2D Shapes',
    description: 'Identify, classify and describe 2D shapes including triangles, quadrilaterals and circles, compare shapes by their properties and recognise shapes in composite figures.',
    free: false,
  },
  {
    slug: '3d-objects',
    name: '3D Objects',
    description: 'Identify, name and classify 3D objects, describe their faces, edges and vertices, match objects to their nets and find 3D objects in everyday structures.',
    free: false,
  },
  {
    slug: 'position-and-movement',
    name: 'Position and Movement',
    description: 'Describe and interpret position on a grid using ordered pairs, follow and give directions, understand rotation and translate positions on a coordinate grid.',
    free: false,
  },
  {
    slug: 'transformations',
    name: 'Transformations',
    description: 'Apply translation, reflection and rotation to 2D shapes, describe the position of transformed shapes and create patterns using combinations of transformations.',
    free: false,
  },
  {
    slug: 'length',
    name: 'Length',
    description: 'Measure and convert between mm, cm, m and km, estimate and calculate lengths, use rulers and measuring tapes accurately and solve length word problems.',
    free: false,
  },
  {
    slug: 'mass',
    name: 'Mass',
    description: 'Measure and convert between grams, kilograms and tonnes, estimate and compare mass, use scales and balances and solve multi-step mass problems.',
    free: false,
  },
  {
    slug: 'capacity-and-volume',
    name: 'Capacity and Volume',
    description: 'Measure and convert between ml and l, calculate volume using unit cubes and formulas, read measuring instruments and solve capacity and volume problems.',
    free: false,
  },
  {
    slug: 'perimeter-and-area',
    name: 'Perimeter, Area and Volume',
    description: 'Calculate perimeter of polygons, find area of rectangles and irregular shapes using grids, calculate volume of rectangular prisms and solve related word problems.',
    free: false,
  },
  {
    slug: 'time',
    name: 'Time',
    description: 'Read and convert between 12-hour and 24-hour time, work with time zones, calculate durations, interpret calendars and solve multi-step time problems.',
    free: false,
  },
  {
    slug: 'data-handling',
    name: 'Data Handling',
    description: 'Collect, organise and represent data in bar graphs, pictographs and pie charts, interpret graphs, calculate mode, median and mean, and draw conclusions from data.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Describe likelihood using the probability scale, list outcomes of experiments, conduct simple experiments and compare theoretical probability with actual results.',
    free: false,
  },
]

const grade6Topics: Topic[] = [
  {
    slug: 'whole-numbers',
    name: 'Whole Numbers — Counting, Ordering & Place Value',
    description: 'Explore place value up to 9-digit numbers, expanded notation, counting in intervals, comparing and ordering numbers, rounding off and representing numbers on a number line.',
    free: true,
  },
  {
    slug: 'addition-subtraction',
    name: 'Addition & Subtraction',
    description: 'Add and subtract whole numbers up to 9 digits, apply column methods, estimation strategies, inverse operations and multi-step word problems.',
    free: false,
  },
  {
    slug: 'multiplication',
    name: 'Multiplication',
    description: 'Multiply whole numbers by 3-digit numbers, apply properties of multiplication, estimate products and solve real-world multiplication problems.',
    free: false,
  },
  {
    slug: 'division',
    name: 'Division',
    description: 'Divide whole numbers by 3-digit divisors, interpret remainders, use long division, verify with inverse operations and solve division word problems.',
    free: false,
  },
  {
    slug: 'properties-of-numbers',
    name: 'Properties of Numbers',
    description: 'Explore properties of whole numbers including factors, multiples, prime and composite numbers, divisibility rules, squares and square roots.',
    free: false,
  },
  {
    slug: 'number-sentences',
    name: 'Number Sentences',
    description: 'Write and solve number sentences with multiple operations, apply the order of operations, find missing values and model real-life situations with equations.',
    free: false,
  },
  {
    slug: 'common-fractions',
    name: 'Common Fractions',
    description: 'Compare, order and simplify fractions, add and subtract fractions with different denominators, multiply fractions by whole numbers and solve fraction problems.',
    free: false,
  },
  {
    slug: 'decimal-fractions',
    name: 'Decimal Fractions',
    description: 'Understand decimal place value to thousandths, convert between decimals and common fractions, multiply and divide decimals and solve decimal word problems.',
    free: false,
  },
  {
    slug: 'percentages',
    name: 'Percentages',
    description: 'Understand percentages as parts out of 100, convert between percentages, fractions and decimals, calculate percentages of quantities and solve real-world percentage problems.',
    free: false,
  },
  {
    slug: 'ratio-and-rate',
    name: 'Ratio and Rate',
    description: 'Understand ratios as comparisons between quantities, simplify ratios, work with rates including unit rates and solve real-world ratio and rate problems.',
    free: false,
  },
  {
    slug: 'patterns-and-functions',
    name: 'Patterns and Functions',
    description: 'Investigate number patterns and geometric sequences, describe rules using words and symbols, work with input-output tables and explore functional relationships.',
    free: false,
  },
  {
    slug: '2d-shapes',
    name: '2D Shapes',
    description: 'Identify, classify and describe 2D shapes including triangles, quadrilaterals and circles, explore properties such as angles and sides and recognise shapes in composite figures.',
    free: false,
  },
  {
    slug: '3d-objects',
    name: '3D Objects',
    description: 'Identify, name and classify 3D objects, describe their faces, edges and vertices, match objects to their nets and find 3D objects in everyday structures.',
    free: false,
  },
  {
    slug: 'angles',
    name: 'Angles',
    description: 'Classify acute, right, obtuse, straight and reflex angles, measure angles with a protractor, and calculate unknown angles on a straight line and around a point.',
    free: false,
  },
  {
    slug: 'transformations',
    name: 'Transformations',
    description: 'Apply translation, reflection and rotation to 2D shapes on a coordinate grid, describe image positions and recognise equivalent rotations.',
    free: false,
  },
  {
    slug: 'perimeter-and-area',
    name: 'Perimeter and Area',
    description: 'Calculate the perimeter of regular and irregular polygons, find the area of rectangles, squares and triangles, and solve real-world problems involving perimeter and area.',
    free: false,
  },
  {
    slug: 'volume',
    name: 'Volume',
    description: 'Calculate the volume of rectangular prisms and cubes using the formula Volume = length × width × height, and solve real-life problems involving containers and packing.',
    free: false,
  },
  {
    slug: 'data-handling',
    name: 'Data Handling',
    description: 'Collect and organise data in frequency tables, read and draw bar graphs and pie charts, calculate the mean, median and mode, and draw conclusions from data.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Describe probability using a scale from 0 to 1, write probability as a fraction, list outcomes of experiments and understand the difference between theoretical and experimental probability.',
    free: false,
  },
]

const grade7Topics: Topic[] = [
  {
    slug: 'whole-numbers',
    name: 'Whole Numbers',
    description: 'Work with whole numbers into the billions, apply ordering and rounding, perform operations with large numbers, and explore squares, cubes, square roots and cube roots.',
    free: true,
  },
  {
    slug: 'integers',
    name: 'Integers',
    description: 'Understand positive and negative integers, order integers on a number line, and add, subtract, multiply and divide integers using sign rules.',
    free: false,
  },
  {
    slug: 'exponents',
    name: 'Exponents',
    description: 'Explore square numbers, cube numbers, square roots and cube roots, write repeated multiplication using exponential notation and apply the zero and first power rules.',
    free: false,
  },
  {
    slug: 'common-fractions',
    name: 'Common Fractions',
    description: 'Convert between mixed numbers and improper fractions, and add, subtract, multiply and divide fractions including mixed numbers.',
    free: false,
  },
  {
    slug: 'decimal-fractions',
    name: 'Decimal Fractions',
    description: 'Add, subtract, multiply and divide decimal fractions, round decimals to any number of decimal places and solve decimal word problems involving money.',
    free: false,
  },
  {
    slug: 'percentages',
    name: 'Percentages',
    description: 'Calculate percentage increases and decreases, apply the simple interest formula and find total amounts after interest.',
    free: false,
  },
  {
    slug: 'ratio-and-rate',
    name: 'Ratio and Rate',
    description: 'Simplify ratios, divide amounts in a ratio, compare ratios, calculate rates and speeds, and solve proportion problems including scale and real-world applications.',
    free: false,
  },
  {
    slug: 'patterns-functions-relationships',
    name: 'Patterns, Functions and Relationships',
    description: 'Identify rules for numeric patterns including linear and quadratic sequences, complete tables of values, write nth term formulas, and plot and interpret straight line and curved graphs.',
    free: false,
  },
  {
    slug: 'algebraic-expressions',
    name: 'Algebraic Expressions',
    description: 'Identify terms, coefficients and constants, evaluate expressions by substitution, recognise like and unlike terms, and simplify expressions by collecting like terms.',
    free: false,
  },
  {
    slug: 'algebraic-equations',
    name: 'Algebraic Equations',
    description: 'Write equations from word problems, solve one-step and two-step equations using inverse operations, and apply algebraic equations to real-world problems.',
    free: false,
  },
  {
    slug: '2d-shapes',
    name: '2D Shapes',
    description: 'Identify and classify triangles and quadrilaterals by their properties, find missing angles using the triangle and quadrilateral angle sum rules, and explore the parts of a circle including radius, diameter, chord and circumference.',
    free: false,
  },
  {
    slug: '3d-objects',
    name: '3D Objects',
    description: 'Calculate the surface area of cubes and rectangular prisms, find the volume of prisms and cylinders, and solve real-world problems involving 3D measurement.',
    free: false,
  },
  {
    slug: 'geometry-of-straight-lines',
    name: 'Geometry of Straight Lines',
    description: 'Classify angles, find unknown angles on a straight line and around a point, use vertically opposite angles, and apply corresponding, alternate and co-interior angle rules with parallel lines.',
    free: false,
  },
  {
    slug: 'transformations',
    name: 'Transformations',
    description: 'Apply reflection, translation and rotation to points and shapes on a coordinate grid, describe image positions using coordinate rules, and solve multi-step transformation problems.',
    free: false,
  },
  {
    slug: 'perimeter-area-volume',
    name: 'Perimeter, Area and Volume',
    description: 'Calculate the perimeter of squares and rectangles, find the area of triangles, squares and rectangles, and calculate the surface area and volume of cubes and rectangular prisms.',
    free: false,
  },
  {
    slug: 'data-handling',
    name: 'Data Handling',
    description: 'Collect and organise data using stem-and-leaf displays, calculate mean, median, mode and range, and represent and interpret data using bar graphs, double bar graphs and pie charts.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Describe probability on a scale from 0 to 1, calculate probability as a fraction of favourable over total outcomes, conduct experiments to find relative frequency, and compare experimental results to theoretical probability.',
    free: false,
  },
]

const grade8Topics: Topic[] = [
  {
    slug: 'whole-numbers',
    name: 'Whole Numbers',
    description: 'Apply the commutative, associative and distributive properties, explore the division property of zero, find prime factors, HCF and LCM, and solve financial problems involving ratio, profit, VAT, simple interest, hire purchase and exchange rates.',
    free: true,
  },
  {
    slug: 'exponents',
    name: 'Exponents',
    description: 'Establish and apply the five laws of exponents, write large numbers in scientific notation, and calculate squares, cubes, square roots and cube roots of integers and rational numbers.',
    free: false,
  },
  {
    slug: 'integers',
    name: 'Integers',
    description: 'Multiply and divide integers using sign rules, apply commutative, associative and distributive properties, identify additive and multiplicative inverses, and calculate with squares, cubes and roots of integers.',
    free: false,
  },
  {
    slug: 'common-fractions',
    name: 'Common Fractions',
    description: 'Divide whole numbers and fractions by common fractions using the reciprocal method, calculate squares, cubes, square roots and cube roots of common fractions, and solve grouping and sharing problems with mixed numbers.',
    free: false,
  },
  {
    slug: 'decimal-fractions',
    name: 'Decimal Fractions',
    description: 'Multiply and divide decimal fractions by other decimal fractions, calculate squares, cubes, square roots and cube roots of decimal fractions, and solve real-world problems involving decimal operations.',
    free: false,
  },
  {
    slug: 'percentages',
    name: 'Percentages',
    description: 'Find original amounts after percentage increases and decreases by working backwards, calculate new amounts from given percentage changes, and solve multi-step real-life problems involving successive percentage changes.',
    free: false,
  },
  {
    slug: 'numeric-geometric-patterns',
    name: 'Numeric and Geometric Patterns',
    description: 'Investigate and extend numeric and geometric patterns, find and test general rules using algebraic notation, and justify rules for both linear and quadratic sequences.',
    free: false,
  },
  {
    slug: 'functions-relationships',
    name: 'Functions and Relationships',
    description: 'Determine input and output values using equations, interpret equivalent forms of a relationship expressed verbally, in tables and as equations, and generate tables of ordered pairs using substitution.',
    free: false,
  },
  {
    slug: 'algebraic-expressions',
    name: 'Algebraic Expressions',
    description: 'Learn conventions for writing expressions, classify like and unlike terms, identify coefficients and exponents, add, subtract, multiply and divide expressions, and evaluate expressions by substitution.',
    free: false,
  },
  {
    slug: 'algebraic-equations',
    name: 'Algebraic Equations',
    description: 'Set up and solve equations by inspection, use additive and multiplicative inverses to solve equations, apply laws of exponents, and use substitution to generate tables of ordered pairs.',
    free: false,
  },
  {
    slug: 'graphs',
    name: 'Graphs',
    description: 'Interpret and draw global graphs of problem situations, plot points on the Cartesian plane, and sketch graphs from real-life descriptions identifying increasing, decreasing, constant, maximum and minimum features.',
    free: false,
  },
  {
    slug: 'geometry-2d-shapes',
    name: 'Geometry of 2D Shapes',
    description: 'Write formal definitions of triangles and quadrilaterals, identify congruent and similar shapes, and solve geometric problems using known properties of sides and angles.',
    free: false,
  },
  {
    slug: 'geometry-3d-objects',
    name: 'Geometry of 3D Objects',
    description: 'Explore the 5 Platonic solids and their properties, build 3D models from nets including pyramids, and compare and classify 3D objects using faces, vertices and edges, verifying Euler\'s formula.',
    free: false,
  },
  {
    slug: 'geometry-straight-lines',
    name: 'Geometry of Straight Lines',
    description: 'Revise angle relationships formed by intersecting and perpendicular lines, explore corresponding, alternate and co-interior angles with parallel lines cut by a transversal, and solve multi-step geometric problems using angle relationships.',
    free: false,
  },
  {
    slug: 'transformation-geometry',
    name: 'Transformation Geometry',
    description: 'Reflect and translate points and triangles on a coordinate plane, rotate shapes around the origin using coordinate rules, and use proportion to describe the effect of enlargements and reductions on perimeter and area.',
    free: false,
  },
  {
    slug: 'construction-geometric-figures',
    name: 'Construction of Geometric Figures',
    description: 'Use a compass, ruler and protractor to bisect line segments and angles, construct perpendicular lines, build triangles and quadrilaterals, construct angles of 30°, 45° and 60° without a protractor, and bisect the angles of a triangle to find the incentre.',
    free: false,
  },
  {
    slug: 'area-perimeter-2d-shapes',
    name: 'Area and Perimeter of 2D Shapes',
    description: 'Calculate the circumference and area of circles using π ≈ 3.14, decompose complex polygons into rectangles and triangles to find their areas, solve real-life perimeter and area problems to at least 2 decimal places, and convert between SI area units (mm², cm², m², km²).',
    free: false,
  },
  {
    slug: 'surface-area-volume-3d',
    name: 'Surface Area and Volume of 3D Objects',
    description: 'Find the volume and surface area of triangular prisms, solve real-life capacity and volume problems with SI unit conversions (mm³↔cm³↔m³, ml↔l↔kl), and explore how surface area and volume change at different rates when dimensions are scaled.',
    free: false,
  },
  {
    slug: 'theorem-of-pythagoras',
    name: 'The Theorem of Pythagoras',
    description: 'Investigate the relationship between the sides of a right-angled triangle, apply the theorem to find unknown sides, determine whether a triangle is right-angled, and solve real-life problems involving missing lengths and surd form answers.',
    free: false,
  },
  {
    slug: 'data-handling',
    name: 'Data Handling',
    description: 'Organise data using tally marks, tables and stem-and-leaf displays, calculate range and identify extremes, draw and interpret histograms and broken-line graphs, and critically analyse data for bias, misleading scales and valid conclusions.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'List all possible outcomes, calculate probability using favourable outcomes divided by total outcomes, predict and compare relative frequency with theoretical probability, and solve multi-step probability problems in context.',
    free: false,
  },
]

const grade9Topics: Topic[] = [
  {
    slug: 'real-number-system',
    name: 'Numbers and the Real Number System',
    description: 'Classify numbers within the real number system — natural, whole, integer, rational and irrational — and investigate the results of operations involving rational and irrational numbers.',
    free: true,
  },
  {
    slug: 'exponents',
    name: 'Exponents',
    description: 'Extend the laws of exponents to include negative (integer) exponents, write very small numbers in scientific notation using negative powers of 10, and solve calculations and real-life problems using all the laws of exponents.',
    free: false,
  },
  {
    slug: 'integers',
    name: 'Integers',
    description: 'Revise calculations with integers including squares, cubes, square roots and cube roots, apply commutative, associative and distributive properties, identify additive and multiplicative inverses, and solve multi-step real-life integer problems.',
    free: false,
  },
  {
    slug: 'common-fractions',
    name: 'Common Fractions',
    description: 'Apply all four operations with fractions and mixed numbers in multi-step problems, calculate squares, cubes, square roots and cube roots of common fractions, and solve real-life problems combining fractions, mixed numbers and percentages.',
    free: false,
  },
  {
    slug: 'decimal-fractions',
    name: 'Decimal Fractions',
    description: 'Apply multiple operations with decimal fractions using BODMAS, calculate squares, cubes and roots of decimal fractions in combined calculations, and solve multi-step real-life problems involving decimal fractions with appropriate rounding.',
    free: false,
  },
  {
    slug: 'ratio-rate-proportion',
    name: 'Ratio, Rate and Proportion',
    description: 'Solve direct and inverse proportion problems using equal ratios and constant products, calculate commission and rental costs, and apply compound interest to multi-year financial scenarios.',
    free: false,
  },
  {
    slug: 'numeric-geometric-patterns',
    name: 'Numeric and Geometric Patterns',
    description: 'Investigate and extend numeric and geometric patterns represented algebraically, move between diagram, table and algebraic forms, and justify general rules using multi-step verification.',
    free: false,
  },
  {
    slug: 'functions-relationships',
    name: 'Functions and Relationships',
    description: 'Determine input and output values using equations, interpret equivalent forms of a relationship expressed verbally, in tables, by equations and as graphs on the Cartesian plane, and generate tables of ordered pairs using substitution.',
    free: false,
  },
  {
    slug: 'algebraic-expressions',
    name: 'Algebraic Expressions',
    description: 'Multiply monomials by polynomials using the distributive law, divide polynomials by integers or monomials, and multiply two binomials using FOIL including the square of a binomial and the difference of two squares.',
    free: false,
  },
  {
    slug: 'factorising-algebraic-expressions',
    name: 'Factorising Algebraic Expressions',
    description: 'Factorise expressions using the highest common factor, apply the difference of two squares identity, factorise trinomials of the form ax² + bx + c, and simplify algebraic fractions by factorising the numerator and denominator.',
    free: false,
  },
  {
    slug: 'algebraic-equations',
    name: 'Algebraic Equations',
    description: 'Solve quadratic equations by factorisation, apply the zero product property to equations given in factorised form, and rearrange equations using common factor, difference of squares and trinomial factorisation methods.',
    free: false,
  },
  {
    slug: 'graphs',
    name: 'Graphs',
    description: 'Determine x-intercepts, y-intercepts and gradients of linear graphs, draw straight-line graphs from given equations using intercepts or a table of values, and determine the equation of a linear graph in the form y = mx + c.',
    free: false,
  },
  {
    slug: 'geometry-2d-shapes',
    name: 'Geometry of 2D Shapes',
    description: 'Investigate minimum conditions for congruent triangles (SSS, SAS, AAS, RHS) and similar triangles (AA, SSS proportionality), and solve geometric problems involving unknown sides and angles using these conditions.',
    free: false,
  },
  {
    slug: 'geometry-3d-objects',
    name: 'Geometry of 3D Objects',
    description: 'Identify and describe the properties of the five Platonic solids, verify Euler\'s formula (F + V − E = 2) for polyhedra, and classify and compare 3D objects including prisms, pyramids, cylinders, cones and spheres.',
    free: false,
  },
  {
    slug: 'geometry-straight-lines',
    name: 'Geometry of Straight Lines',
    description: 'Revise and apply angle relationships including vertically opposite, supplementary and complementary angles, solve multi-step problems involving parallel lines cut by a transversal using corresponding, alternate and co-interior angle theorems, and justify angle calculations with geometric reasons.',
    free: false,
  },
  {
    slug: 'transformation-geometry',
    name: 'Transformation Geometry',
    description: 'Reflect points and figures in the line y=x, identify transformations from given image coordinates, and investigate coordinates of vertices after enlargement or reduction by a scale factor from the origin.',
    free: false,
  },
  {
    slug: 'construction-geometric-figures',
    name: 'Construction of Geometric Figures',
    description: 'Investigate the exterior angle theorem by construction, explore the properties of diagonals in quadrilaterals, and confirm the sum of interior angles formula for any polygon by dividing it into triangles.',
    free: false,
  },
  {
    slug: 'area-perimeter',
    name: 'Area and Perimeter',
    description: 'Solve problems using appropriate formulae and unit conversions for polygons and circles, investigate how doubling dimensions affects perimeter and area, and apply scale factor reasoning to real-life enlargement and reduction problems.',
    free: false,
  },
  {
    slug: 'surface-area-volume',
    name: 'Surface Area and Volume',
    description: 'Calculate the volume and surface area of cylinders using formulae, solve real-life capacity problems with SI unit conversions, and investigate how scaling dimensions by a factor affects the volume of prisms and cylinders.',
    free: false,
  },
  {
    slug: 'theorem-of-pythagoras',
    name: 'The Theorem of Pythagoras',
    description: 'Apply the Theorem of Pythagoras to find unknown sides in right-angled triangles within geometric figures, solve multi-step real-life problems and use algebraic methods to find unknown lengths.',
    free: false,
  },
  {
    slug: 'data-handling',
    name: 'Data Handling',
    description: 'Organise data by multiple criteria, interpret and draw scatter plots to identify positive, negative and no correlation, and critically compare two data sets by analysing their central tendency and spread.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Use two-way tables and tree diagrams for compound events, calculate probability of combined outcomes, predict relative frequency and compare with theoretical probability to explain differences.',
    free: false,
  },
]

const grade10Topics: Topic[] = [
  {
    slug: 'algebraic-expressions',
    name: 'Algebraic Expressions',
    description: 'Multiply a binomial by a trinomial, factorise trinomials using the a×c method, factorise by grouping in pairs, and simplify algebraic fractions with monomial denominators.',
    free: true,
  },
  {
    slug: 'exponents',
    name: 'Exponents',
    description: 'Apply the laws of exponents to integral exponents, simplify surds, show that square roots of non-perfect squares are irrational, and round irrational numbers to a given degree of accuracy.',
    free: false,
  },
  {
    slug: 'numbers-and-patterns',
    name: 'Numbers and Patterns',
    description: 'Identify rational and irrational numbers, convert recurring decimals to fractions, recognise equations with no real solutions, and investigate linear number patterns to find general terms.',
    free: false,
  },
  {
    slug: 'equations-and-inequalities',
    name: 'Equations and Inequalities',
    description: 'Solve linear equations and inequalities, quadratic equations by factorisation, and literal equations, applying inverse operations and algebraic reasoning to find unknown values.',
    free: false,
  },
  {
    slug: 'trigonometry',
    name: 'Trigonometry',
    description: 'Apply SOHCAHTOA to find missing sides and angles in right-angled triangles, extend trig functions to all four quadrants, interpret graphs of sin, cos and tan, and solve real-life 2D problems.',
    free: false,
  },
  {
    slug: 'functions',
    name: 'Functions',
    description: 'Understand the concept of a function, sketch and interpret linear, quadratic, hyperbolic and exponential functions, identify key features such as gradients, turning points and asymptotes, and solve problems using prescribed function types.',
    free: false,
  },
  {
    slug: 'euclidean-geometry',
    name: 'Euclidean Geometry',
    description: 'Revise similarity and congruence of triangles, investigate properties of special quadrilaterals, explore alternative definitions of polygons, and prove or disprove geometric conjectures using counter-examples and formal proofs.',
    free: false,
  },
  {
    slug: 'analytical-geometry',
    name: 'Analytical Geometry',
    description: 'Use the distance, gradient and midpoint formulae to find lengths, slopes and midpoints on the Cartesian plane, and apply these to prove properties of geometric figures.',
    free: false,
  },
  {
    slug: 'finance-growth-decay',
    name: 'Finance, Growth and Decay',
    description: 'Apply simple and compound interest formulae, solve for n using trial and improvement, explore simple decay, and calculate the implications of fluctuating foreign exchange rates.',
    free: false,
  },
  {
    slug: 'statistics',
    name: 'Statistics',
    description: 'Find the approximate mean and modal interval of grouped data, use a Casio fx-82 calculator for statistics, identify outliers, draw frequency polygons, and calculate range, quartiles and the interquartile range.',
    free: false,
  },
  {
    slug: 'mensuration',
    name: 'Mensuration',
    description: 'Find the volume and surface area of cylinders, cones, spheres and pyramids, calculate dimensions of combined solids, and solve problems involving missing dimensions by rearranging formulae.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Use relative frequency and theoretical probability, solve Venn diagram problems, apply mutually exclusive and complementary event rules, and use the general addition rule for combined probabilities.',
    free: false,
  },
]

const grade11Topics: Topic[] = [
  {
    slug: 'algebraic-expressions',
    name: 'Algebraic Expressions',
    description: 'Complete the square to rewrite quadratic expressions, find maximum and minimum values, identify turning points, and simplify algebraic fractions with binomial denominators.',
    free: true,
  },
  {
    slug: 'equations-and-inequalities',
    name: 'Equations and Inequalities',
    description: 'Solve quadratic equations using factorisation, completing the square and the quadratic formula; solve quadratic and rational inequalities using sign analysis; and solve systems of one linear and one quadratic equation simultaneously.',
    free: false,
  },
  {
    slug: 'numbers-and-patterns',
    name: 'Numbers and Patterns',
    description: 'Identify equations with no real solutions using the discriminant, apply rational exponents and surd operations, work with error margins, and find the nth term of quadratic number patterns using the second difference method.',
    free: false,
  },
  {
    slug: 'analytical-geometry',
    name: 'Analytical Geometry',
    description: 'Use distance, gradient and midpoint formulas, find equations of lines through two points, apply parallel and perpendicular gradient rules, determine inclinations using tan θ, and solve mixed problems involving triangles on the Cartesian plane.',
    free: false,
  },
  {
    slug: 'finance-decay',
    name: 'Finance — Simple and Compound Decay',
    description: 'Apply simple decay and compound decay formulas, compare growth and decay scenarios, solve problems involving depreciation of assets, and interpret the effects of different decay rates over time.',
    free: false,
  },
  {
    slug: 'trigonometry',
    name: 'Trigonometry',
    description: 'Derive exact values for special angles, prove trigonometric identities, apply reduction formulae, find general solutions of trig equations, and use the Sine, Cosine and Area Rules to solve 2D problems.',
    free: false,
  },
  {
    slug: 'functions',
    name: 'Functions',
    description: 'Extend your understanding of functions to include horizontal transformations using the parameters k and p, sketch and interpret graphs of quadratic, hyperbolic and exponential functions, and determine equations from graphs.',
    free: false,
  },
  {
    slug: 'euclidean-geometry',
    name: 'Euclidean Geometry',
    description: 'Prove and apply similarity conditions for triangles, use the Proportionality Theorem and Midpoint Theorem, prove the Theorem of Pythagoras using similar triangles, and solve riders using AA and SSS similarity.',
    free: false,
  },
  {
    slug: 'probability',
    name: 'Probability',
    description: 'Distinguish between independent and dependent events, apply the product rule, analyse Venn diagrams, contingency tables and tree diagrams, and use the complementary and addition rules to solve multi-step probability problems.',
    free: false,
  },
  {
    slug: 'statistics',
    name: 'Statistics',
    description: 'Summarise data using the five number summary and box and whisker diagrams, draw and interpret ogives, calculate variance and standard deviation, identify skewness, and determine suitable regression models for bivariate data.',
    free: false,
  },
]

const grade12Topics: Topic[] = [
  {
    slug: 'functions-inverses',
    name: 'Functions (Including Inverses)',
    description: 'Understand and sketch linear, quadratic, hyperbolic and exponential functions, apply the vertical and horizontal line tests, find inverses algebraically, and explore how f and f⁻¹ reflect across y = x.',
    free: true,
  },
  {
    slug: 'exponential-logarithmic-functions',
    name: 'Exponential and Logarithmic Functions',
    description: 'Revise exponential functions, define and convert logarithms, apply log laws including product, quotient, power and change of base, solve exponential and logarithmic equations, and sketch the graph of y = logₐx.',
    free: false,
  },
  {
    slug: 'patterns-sequences-series',
    name: 'Patterns, Sequences and Series',
    description: 'Revise arithmetic and geometric sequences, master sigma notation, calculate arithmetic and geometric series sums, and apply the sum to infinity for convergent geometric series.',
    free: false,
  },
  {
    slug: 'finance',
    name: 'Finance',
    description: 'Revise simple and compound growth and decay, use logarithms to solve for n, convert between nominal and effective interest rates, and apply future value and present value annuity formulae to savings and loan problems.',
    free: false,
  },
  {
    slug: 'trigonometry',
    name: 'Trigonometry',
    description: 'Apply compound and double angle identities, prove trigonometric identities, solve trig equations, and tackle 2D and 3D problems using the sine rule, cosine rule and area rule.',
    free: false,
  },
  {
    slug: 'functions-polynomials',
    name: 'Functions — Polynomials',
    description: 'Apply the Remainder and Factor Theorems, fully factorise cubic polynomials using long division, solve cubic equations and sketch cubic graphs from their factorised form.',
    free: false,
  },
  {
    slug: 'euclidean-geometry-circles',
    name: 'Euclidean Geometry — Circles',
    description: 'Master all circle theorems — angle at centre, angles in the same segment, angle in a semicircle, cyclic quadrilaterals, tangent theorems, and the alternate segment theorem — and apply them to riders and proofs.',
    free: false,
  },
  {
    slug: 'analytical-geometry',
    name: 'Analytical Geometry',
    description: 'Apply the distance, gradient and midpoint formulae, find the equation of a circle in standard and expanded form, determine equations of tangents at points on circles, and solve multi-step problems combining circle and line geometry.',
    free: false,
  },
  {
    slug: 'differential-calculus',
    name: 'Differential Calculus',
    description: 'Master limits, differentiation from first principles, rules of differentiation, equations of tangents, cubic function sketching, and optimisation using calculus.',
    free: false,
  },
  {
    slug: 'statistics',
    name: 'Statistics',
    description: 'Revise the five number summary and box and whisker diagrams, draw and interpret ogives, identify symmetric and skewed distributions, apply the 68-95-99.7 rule for the normal distribution, and analyse scatter plots with regression lines and correlation coefficients.',
    free: false,
  },
]

function getTopics(grade: string): Topic[] {
  if (grade === '4') return grade4Topics
  if (grade === '5') return grade5Topics
  if (grade === '6') return grade6Topics
  if (grade === '7') return grade7Topics
  if (grade === '8') return grade8Topics
  if (grade === '9') return grade9Topics
  if (grade === '10') return grade10Topics
  if (grade === '11') return grade11Topics
  if (grade === '12') return grade12Topics
  return defaultTopics
}

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default function GradePage() {
  const params = useParams()
  const grade = params.grade as string
  const { user } = useAuth()
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const topics = getTopics(grade)

  // Only restrict after hydration, and only for the active child's paid tier —
  // free accounts can browse any grade (limited to 1 topic each), a paid
  // child gets full access only to the grade they're actually paying for.
  // Scoped to the active child, not "any child on the account", since tiers
  // are now independent per child.
  const isRestricted =
    mounted &&
    user !== null &&
    getActiveTier(user) !== 'free' &&
    getActiveChild(user).grade !== Number(grade)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all"
          >
            <span aria-hidden="true">←</span>
            {t.grade_back_to_home}
          </Link>
          <NavAuth />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Grade heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1e40af] mb-2">
            {t.grade_curriculum}
          </p>
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
            {t.grade_heading.replace('{grade}', String(grade))}
          </h1>
          {!isRestricted && (
            <p className="text-gray-500">
              {t.grade_choose_topic_below}{' '}
              <span className="text-[#1e40af] font-medium">{t.grade_topics_1_2_free}</span>
            </p>
          )}
        </div>

        {isRestricted ? (
          <div className="flex flex-col items-center text-center py-16 max-w-sm mx-auto">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1e40af"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg mb-2" style={{ color: '#0f1f3d' }}>
              {t.grade_not_in_profile.replace('{grade}', String(grade))}
            </h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              {t.grade_not_added_to_profile}
            </p>
            <Link
              href="/profile"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              {t.grade_update_grades_in_profile}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/grade/${grade}/${topic.slug}`}
                className={`group bg-white rounded-xl p-6 border shadow-sm transition-all ${
                  topic.free
                    ? 'border-gray-100 hover:border-[#1e40af]/30 hover:shadow-md'
                    : 'border-gray-100 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2
                    className={`font-semibold transition-colors ${
                      topic.free
                        ? 'text-[#0f1f3d] group-hover:text-[#1e40af]'
                        : 'text-gray-600 group-hover:text-gray-800'
                    }`}
                  >
                    {topic.name}
                  </h2>
                  <span className="mt-0.5 shrink-0">
                    {topic.free ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#1e40af] border border-blue-200">
                        {t.grade_free_badge}
                      </span>
                    ) : (
                      <span className="text-gray-400 group-hover:text-gray-500 transition-colors">
                        <LockIcon />
                      </span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>
                <div
                  className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${
                    topic.free
                      ? 'text-[#1e40af] group-hover:gap-1.5'
                      : 'text-gray-400'
                  }`}
                >
                  {topic.free ? (
                    <>{t.grade_start_learning} <ChevronRight /></>
                  ) : (
                    <>{t.grade_subscribe_to_unlock}</>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
