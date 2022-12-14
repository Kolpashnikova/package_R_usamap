% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/usamap.R
\name{usamap}
\alias{usamap}
\title{US Map Visualization for Time-Use Data in R}
\usage{
usmap(df)
usmap(df, startCOlor, endCOlor)
}
\arguments{
\item{df}{json data with keys as two-letter state codes and values.}

\item{startColor}{the RGB color list for the lower values of gradient.
The default is blue.}

\item{endColor}{the RGB color list for higher values of gradient.
The default is red.}
}
\description{
Draws an interactive US map for state-level data.
}
\references{
Kolpashnikova, Kamila. (2022). US Map Visualization for Time-Use Data in R. Toronto,ON: York University.
}
