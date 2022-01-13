<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
            </head>
            <body>
                <h1 style="text-align:center">Railway Management system</h1>
                
                <table border="2" align="center">
                    <tr>
                        <th>Train Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>SA Availabile</th>
                        <th>SA Price</th>
                        <th>SL Availabile</th>
                        <th>SL Price</th>
                        

                    </tr>
                    <xsl:for-each select="Railway/menu/train">
                        <xsl:sort select = "tname"/>
                        <xsl:if test="SAA &gt; 100">
                            <tr >

                                <xsl:choose>
                                    <xsl:when test="SLA &gt; 300">
                                        <td bgcolor="#ff00ff">
                                            <xsl:value-of select="tname"/>
                                        </td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <td>
                                            <xsl:value-of select="tname"/>
                                        </td>
                                    </xsl:otherwise>
                                </xsl:choose>
                                
                                <td>
                                    <xsl:value-of select="from"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="to"></xsl:value-of>
                                </td>

                                
                                <td>
                                    <xsl:value-of select="SAA"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="SA"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="SLA"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="SL"></xsl:value-of>
                                </td>

                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <br>
                    <br>
                    </br>
                </br>
                <h1 style="text-align:center">Complete Train Details</h1>
                <xsl:apply-templates/>
            </body>
        </html>
          
    </xsl:template>

    <xsl:template match="cd">
        <p>
            <xsl:apply-templates select="from"/>
            <xsl:apply-templates select="to"/>
            <xsl:apply-templates select="tname"/>
            <xsl:apply-templates select="SAA"/>
            <xsl:apply-templates select="SA"/>
            <xsl:apply-templates select="SLA"/>
            <xsl:apply-templates select="SL"/>
        </p>
    </xsl:template>

    <xsl:template match="from">
        From: <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    

    <xsl:template match="to">
        To: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    <xsl:template match="tname">
        Train Name: <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>

    <xsl:template match="SAL">
        SA Availability: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    <xsl:template match="SA">
        SA price: <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>

    <xsl:template match="SLA">
        SL Availability: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    <xsl:template match="SL">
        SL Price: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
</xsl:stylesheet>