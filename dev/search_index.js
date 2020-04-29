var documenterSearchIndex = {"docs":
[{"location":"#MortalityTables.jl-1","page":"Home","title":"MortalityTables.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"DocTestSetup = quote\n    using MortalityTables\nend","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [MortalityTables]","category":"page"},{"location":"#MortalityTables.Balducci","page":"Home","title":"MortalityTables.Balducci","text":"Balducci()\n\nA DeathDistribution type that assumes a decreasing force of mortality over the year.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.Constant","page":"Home","title":"MortalityTables.Constant","text":"Constant()\n\nA DeathDistribution type that assumes a constant force of mortality over the year.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.DeathDistribution","page":"Home","title":"MortalityTables.DeathDistribution","text":"DeathDistribution\n\nAn abstract type used to form an assumption of how deaths occur throughout a     year. See Balducci(), Uniform(), and Constant() for concrete     assumption types.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.MortalityTable","page":"Home","title":"MortalityTables.MortalityTable","text":"MortalityTable\n\nA struct that holds a select (two-dimensional) and ultimate (vector) rates,\n    along with MetaData associated with the table.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.SelectMortality","page":"Home","title":"MortalityTables.SelectMortality","text":"Given an 2D array, will create a dictionary that is indexed by issue age and will return missing `if the age is not available.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.UltimateMortality","page":"Home","title":"MortalityTables.UltimateMortality","text":"Given an ultimate vector, will create a dictionary that is indexed by issue age and will return missing `if the age is not available.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.Uniform","page":"Home","title":"MortalityTables.Uniform","text":"Uniform()\n\nA DeathDistribution type that assumes an increasing force of mortality over the year.\n\n\n\n\n\n","category":"type"},{"location":"#MortalityTables.get_SOA_table!-Tuple{Any,Int64}","page":"Home","title":"MortalityTables.get_SOA_table!","text":"get_SOA_table!(dict,id)\n\nWill lookup the given mortality table and add it to the given dict, with the name of the table acting as the added key in the dictionary.\n\nThis modifies the given dict (as is indicated by the conventional ! at the end of the function name).\n\n!! Remember that not all tables have been tested to work.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.get_SOA_table-Tuple{Int64}","page":"Home","title":"MortalityTables.get_SOA_table","text":"get_SOA_table(id)\n\nGiven the id of a mort.SOA.org table, grab it and return it as a MortalityTable.\n\n!! Remember that not all tables have been tested to work.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.p-Tuple{Any,Any,Any,Any,Balducci}","page":"Home","title":"MortalityTables.p","text":"p(MortalityTable,issue_age,duration,time,DeathDistribution)\n\nA function to calculate non-whole year survivorship, where you must     make an assumption (DeathDistribution) about how the annual rate of     mortaility applies through the rest of the year.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.p-Tuple{Any,Any,Any,Any,Constant}","page":"Home","title":"MortalityTables.p","text":"p(MortalityTable,issue_age,duration,time,DeathDistribution)\n\nA function to calculate non-whole year survivorship, where you must     make an assumption (DeathDistribution) about how the annual rate of     mortaility applies through the rest of the year.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.p-Tuple{Any,Any,Any,Any,Uniform}","page":"Home","title":"MortalityTables.p","text":"p(MortalityTable,issue_age,duration,time,DeathDistribution)\n\nA function to calculate non-whole year survivorship, where you must     make an assumption (DeathDistribution) about how the annual rate of     mortaility applies through the rest of the year.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.p-Tuple{MortalityTables.MortalityDict,Any,Any,Int64}","page":"Home","title":"MortalityTables.p","text":"The probability that a life with given issue_age and currently in its nth durationdies survives to at least duration + time. If given select mortality, will be based on select rates.\n\nEquivalant actuarial notation: _tp_(x)+s, or the probability that a life aged x + s who was select at age x survives to at least age x+s+t\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.p-Tuple{MortalityTables.MortalityDict,Any,Any}","page":"Home","title":"MortalityTables.p","text":"the probability that a life aged issue_age + duration - 1 survives one additional timepoint\n\nEquivalent actuarial notation: p_x , or\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.q-NTuple{5,Any}","page":"Home","title":"MortalityTables.q","text":"q(MortalityTable,issue_age,duration,time,DeathDistribution)\n\nA function to calculate non-whole year force of mortality, where you must     make an assumption (DeathDistribution) about how the annual rate of     mortaility applies through the rest of the year.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.q-Tuple{MortalityTables.MortalityDict,Any,Any,Int64}","page":"Home","title":"MortalityTables.q","text":"The probability that a life with given issue_age and currently in its nth durationdies by at least duration + time. If given select mortality, will be based on select rates.\n\nEquivalent actuarial notation: p_(x)+s  or the probability that a life aged x + s who was select at age x dies by least age x+s+t\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.q_select-Tuple{MortalityTables.XTbMLTable,Int64,Int64}","page":"Home","title":"MortalityTables.q_select","text":"q_select(table::XTbMLTable, issueAge, duration)\n\nGiven a mortality table, an issue age, and a duration, returns the appropriate select or ultimate qx.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.q_ultimate-Tuple{MortalityTables.XTbMLTable,Any}","page":"Home","title":"MortalityTables.q_ultimate","text":"q_ulitmate(table::XTbMLTable, age)\n\nGiven a mortality table and an age returns the appropriate ultimate qx.\n\n\n\n\n\n","category":"method"},{"location":"#MortalityTables.tables","page":"Home","title":"MortalityTables.tables","text":"tables(dir=nothing)\n\nLoads the XtbML (the SOA XML data format for mortality tables) stored in the\ngiven path. If no path is specified, will load the packages in the\nMortalityTables package directory. To see where your system keeps packages,\nrun `DEPOT_PATH` from a Julia REPL.\n\n\n\n\n\n","category":"function"}]
}
