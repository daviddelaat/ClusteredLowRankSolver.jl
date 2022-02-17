var documenterSearchIndex = {"docs":
[{"location":"#ClusteredLowRankSolver.jl","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.jl","text":"","category":"section"},{"location":"","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.jl","text":"ClusteredLowRankSolver.jl provides a primal-dual interior point method for solving clustered low-rank semidefinite programs. This can be used for (semidefinite) programs with polynomial inequality constraints, which can be rewritten in terms of sum-of-squares polynomials. See the manual for a detailed description of the problems and the usage of the solver.","category":"page"},{"location":"#Citation","page":"ClusteredLowRankSolver.jl","title":"Citation","text":"","category":"section"},{"location":"","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.jl","text":"If you use ClusteredLowRankSolver.jl in work that results in a publication, consider citing","category":"page"},{"location":"","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.jl","text":"D. de Laat and N.M. Leijenhorst, Solving Clustered Low-Rank Semidefinite Programs arising from Polynomial Optimization, arXiv:","category":"page"},{"location":"#Clustered-Low-Rank-Semidefinite-Programs","page":"ClusteredLowRankSolver.jl","title":"Clustered Low-Rank Semidefinite Programs","text":"","category":"section"},{"location":"","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.jl","text":"beginaligned\n\tmin quad  sum_j langle Y^j C^j rangle + langle y brangle \n\ttextst quad  langle Y^j A^j_* rangle + B^T y = c \n\t Y^j succeq 0\nendaligned","category":"page"},{"location":"#Documentation","page":"ClusteredLowRankSolver.jl","title":"Documentation","text":"","category":"section"},{"location":"","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.jl","text":"Modules = [ClusteredLowRankSolver]","category":"page"},{"location":"#ClusteredLowRankSolver.Block","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.Block","text":"Block(l::Any[, r::Int, s::Int])\n\nSpecifies a block corresponding to the positive semidefinite variable l.\n\nSpecifying r,s makes the Block correspond to the r,s subblock of the variable l.\n\n\n\n\n\n","category":"type"},{"location":"#ClusteredLowRankSolver.ClusteredLowRankSDP","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.ClusteredLowRankSDP","text":"ClusteredLowRankSDP(sos::LowRankSOSProblem[, as_free])\n\nDefine a ClusteredLowRankSDP based on the LowRankSOSProblem sos.\n\nThe PSD variables defined by the keys as_free will be modelled as extra free variables, with extra constraints to ensure that they are equal to the entries of the PSD variables. Keyword arguments:     prec (default: precision(BigFloat)) - the precision of the result     verbose (default: false) -  print progress to the standard output\n\n\n\n\n\n","category":"type"},{"location":"#ClusteredLowRankSolver.Constraint","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.Constraint","text":"Constraint(constant, matrixcoeff, freecoeff, samples[, scalings])\n\nModels a polynomial constaint of the form     constant = ∑block < block, matrixcoeff[block] > + ∑freevar freecoeff[freevar]*freevar with samples.\n\nArguments:     constant::MPolyElem     matrixcoeff::Dict(Block, LowRankMatPol)     freecoeff::Dict(Any, MPolyElem)     samples::Vector{Vector}     scalings::Vector\n\n\n\n\n\n","category":"type"},{"location":"#ClusteredLowRankSolver.LowRankMatPol","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.LowRankMatPol","text":"LowRankMat(eigenvalues::Vector, rightevs::Vector{Vector}[, leftevs::Vector{Vector}])\n\nThe matrix ∑_i eigenvalues[i]rightevs[i]leftevs[i]'.\n\nIf leftevs is not specified, use leftevs = rightevs. The elements of the Vectors are\n\n\n\n\n\n","category":"type"},{"location":"#ClusteredLowRankSolver.Objective","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.Objective","text":"Objective(constant, matrixcoeff::Dict{Block, Matrix}, freecoeff::Dict)\n\nThe objective for the LowRankSOSProblem\n\n\n\n\n\n","category":"type"},{"location":"#ClusteredLowRankSolver.approximatefekete-Tuple{Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.approximatefekete","text":"approximatefekete(basis, samples) -> basis, samples\n\nCompute approximate fekete points based on samples and a corresponding orthogonal basis. The basis consists of sampled polynomials, sampled at samples\n\nThis preserves a degree ordering of basis if present.\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.calculate_res_d!-NTuple{6, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.calculate_res_d!","text":"Compute the dual residue d = c - <A_*, Y> - By\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.check_pd_feasibility-NTuple{4, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.check_pd_feasibility","text":"Check primal and dual feasibility\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_S_integrated!-NTuple{11, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_S_integrated!","text":"Compute S, integrated with the precomputing of the bilinear pairings\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_T_decomposition!-NTuple{14, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_T_decomposition!","text":"Compute the decomposition of [S B; B^T 0]\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_dual_error-Tuple{Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_dual_error","text":"Compute the dual error\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_dual_objective-Tuple{Any, Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_dual_objective","text":"Compute the dual objective <C,Y> + <b,y> + constant\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_duality_gap-NTuple{4, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_duality_gap","text":"Compute the duality gap (primalobj - dualobj)/max{1, |primalobj+dualobj|}\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_error-Tuple{Arblib.ArbRefMatrix}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_error","text":"Compute the error (max abs(d_ij)) of an ArbMatrix\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_error-Tuple{BlockDiagonals.BlockDiagonal}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_error","text":"Compute the error (max abs (P_ij)) of a blockdiagonal matrix\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_primal_error-Tuple{Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_primal_error","text":"Compute the primal error\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_primal_objective-Tuple{Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_primal_objective","text":"Compute the primal objective <c, x> + constant\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_residual_R!-NTuple{5, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_residual_R!","text":"Compute the residual R, with or without second order term \n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_residuals!-NTuple{11, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_residuals!","text":"Compute the residuals P,p and d.\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_search_direction!-NTuple{17, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_search_direction!","text":"Compute the search directions, using a precomputed decomposition\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_step_length-Tuple{BlockDiagonals.BlockDiagonal, BlockDiagonals.BlockDiagonal, Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_step_length","text":"Compute the step length min(γ α(M,dM), 1), where α is the maximum number step to which keeps M+α(M,dM) dM positive semidefinite\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.compute_weighted_A!-NTuple{4, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.compute_weighted_A!","text":"Set initialmatrix to ∑i ai Ai\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.distribute_weights_swapping-Tuple{Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.distribute_weights_swapping","text":"Distribute the weights over n (about) equal-sized bins by swapping between bins with high total weight and low total weight.\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.dot_c-Tuple{Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.dot_c","text":"Compute <c,x> where c is distributed over constraints\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.solvesdp","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.solvesdp","text":"solvesdp(sdp; kwargs...)\n\nSolve the clustered SDP with low-rank constraint matrices.\n\nSolve the following sdp:\n\nmax/min ∑_j <C^j, Y^j> + b^T y\ns.t.    <A_*^j,Y^j> + B^j y = c^j\n        Y^j ⪰ 0\n\nwhere we optimize over the free variables y and the PSD block matrices Y^j = diag(Y^{j,1}, ..., Y^{j,L_j}), and <A_*^j, Y^j> = (<A_p^j, Y^j>)_{p=1,...,P_j}. The matrices A^j_p have the same block structure as Y^j. Every A^{j,l} can have several equal-sized blocks A^{j,l}[r,s]. The smallest blocks have a low rank structure.\n\nKeyword arguments: \t- prec (default: precision(BigFloat)): the precision used     - gamma (default: 0.9): the step length reduction; a maximum step length of α reduces to a step length of max(gamma*α,1)     - beta_(in)feasible (default: 0.1 (0.3)): the amount mu is tried to be reduced by in each iteration, for (in)feasible solutions     - omega_p/d (default: 10^10): the starting matrix variable for the primal/dual is omega_p/d*I \t- maxiterations (default: 500): the maximum number of iterations \t- duality_gap_threshold (default: 10^-15): how near to optimal the solution needs to be \t- primal/dual_error_threshold (default:10^-30): how feasible the primal/dual solution needs to be \t- max_complementary_gap (default: 10^100): the maximum of <X,Y>/#rows(X) allowed \t- need_primal_feasible/need_dual_feasible (default: false): terminate when the solution is primal/dual feasible \t- verbose (default: true): print information after every iteration if true \t- step_length_threshold (default: 10^-7): the minimum step length allowed \t- initial_solutions (default: []): if x,X,y,Y are given, use that instead of omega_p/d * I for the initial solutions\n\n\n\n\n\n","category":"function"},{"location":"#ClusteredLowRankSolver.terminate-NTuple{8, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.terminate","text":"Determine whether the main loop should terminate or not\n\n\n\n\n\n","category":"method"},{"location":"#ClusteredLowRankSolver.trace_A-Tuple{Any, BlockDiagonals.BlockDiagonal, Any, Any}","page":"ClusteredLowRankSolver.jl","title":"ClusteredLowRankSolver.trace_A","text":"Compute the vector <A*,Z> = Tr(A* Z) for one or all constraints\n\n\n\n\n\n","category":"method"}]
}
